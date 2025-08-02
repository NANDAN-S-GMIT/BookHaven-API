const express = require('express');
const books = require('./booksdb.js');
const isValid = require('./auth_users.js').isValid;
const users = require('./auth_users.js').users;
const public_users = express.Router();

// Task 1 & Task 10: Get all books
public_users.get('/', (req, res) => {
  res.json(books);
});

// Task 2 & Task 11: Get book by ISBN
public_users.get('/isbn/:isbn', (req, res) => {
  const { isbn } = req.params;
  const book = books.getBookByISBN(isbn);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
});

// Task 3 & Task 12: Get books by author
public_users.get('/author/:author', (req, res) => {
  const { author } = req.params;
  const result = books.getBooksByAuthor(author);
  if (result.length > 0) res.json(result);
  else res.status(404).json({ message: 'No books by this author' });
});

// Task 4 & Task 13: Get books by title
public_users.get('/title/:title', (req, res) => {
  const { title } = req.params;
  const result = books.getBooksByTitle(title);
  if (result.length > 0) res.json(result);
  else res.status(404).json({ message: 'No books with this title' });
});

// Task 5: Get book reviews by ISBN
public_users.get('/review/:isbn', (req, res) => {
  const { isbn } = req.params;
  if (!books[isbn]) return res.status(404).json({ message: 'Book not found' });
  res.json(books[isbn].reviews || {});
});

// Task 6: Register user
public_users.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required' });

  if (!isValid(username))
    return res.status(400).json({ message: 'Invalid username' });

  if (users.find(u => u.username === username))
    return res.status(400).json({ message: 'Username exists' });

  users.push({ username, password });
  res.json({ message: 'User registered' });
});

module.exports.general = public_users;
