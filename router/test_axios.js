const axios = require('axios');

// Task 10: Get all books (async/await)
async function getAllBooks() {
  try {
    const res = await axios.get('http://localhost:5000/customer/');
    console.log('All books:', res.data);
  } catch (err) {
    console.error('Error getting all books:', err.message);
  }
}

// Task 11: Search by ISBN (Promises)
function searchByISBN(isbn) {
  axios.get(`http://localhost:5000/customer/isbn/${isbn}`)
    .then(res => console.log('Book by ISBN:', res.data))
    .catch(err => console.error('Error:', err.response?.data || err.message));
}

// Task 12: Search by Author (async/await)
async function searchByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:5000/customer/author/${encodeURIComponent(author)}`);
    console.log('Books by Author:', res.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
}

// Task 13: Search by Title (async/await)
async function searchByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:5000/customer/title/${encodeURIComponent(title)}`);
    console.log('Books by Title:', res.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
}

// Run Tasks 10-13
(async () => {
  await getAllBooks();
  searchByISBN('1');
  await searchByAuthor('Chinua Achebe');
  await searchByTitle('Things Fall Apart');
})();
