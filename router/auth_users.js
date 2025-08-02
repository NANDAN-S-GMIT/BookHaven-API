const express = require('express');
const jwt = require('jsonwebtoken');
const books = require('./booksdb.js');
const regd_users = express.Router();

let users = []; // in-memory user store: { username, password }

function isValid(username) {
  return username && /^[a-zA-Z0-9_]+$/.test(username);
}

function authenticatedUser(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

// Login route
regd_users.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password are required' });
  if (!authenticatedUser(username, password))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username }, 'secret_key', { expiresIn: '2h' });
  res.status(200).json({ token });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token required' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// Add or modify book review
regd_users.put('/auth/review/:isbn', verifyToken, (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;

  if (!books[isbn]) return res.status(404).json({ message: 'Book not found' });
  if (!review) return res.status(400).json({ message: 'Review is required' });

  books[isbn].reviews[req.user.username] = review;
  return res.json({ message: 'Review added/modified' });
});

// Delete book review
regd_users.delete('/auth/review/:isbn', verifyToken, (req, res) => {
  const { isbn } = req.params;

  if (!books[isbn] || !books[isbn].reviews)
    return res.status(404).json({ message: 'Book not found or no reviews' });

  if (!books[isbn].reviews[req.user.username])
    return res.status(404).json({ message: 'No review by user' });

  delete books[isbn].reviews[req.user.username];
  return res.json({ message: 'Review deleted' });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
