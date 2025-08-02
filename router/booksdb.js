let books = {
  "1": {
    author: "Chinua Achebe",
    title: "Things Fall Apart",
    reviews: {
      "alice": "A powerful story about tradition and change.",
      "bob": "An honest portrayal of African tribal life."
    }
  },
  "2": {
    author: "Hans Christian Andersen",
    title: "Fairy Tales",
    reviews: {
      "charlie": "Timeless tales full of wisdom.",
      "daisy": "Some stories felt a bit dark but thought-provoking."
    }
  },
  "3": {
    author: "Dante Alighieri",
    title: "The Divine Comedy",
    reviews: {
      "edward": "Complex but deeply rewarding read.",
      "fiona": "A poetic journey through the afterlife, honest and captivating."
    }
  },
  "4": {
    author: "Unknown",
    title: "The Epic of Gilgamesh",
    reviews: {
      "george": "Ancient story that still resonates, an honest exploration of friendship and mortality."
    }
  },
  "5": {
    author: "Unknown",
    title: "The Book of Job",
    reviews: {
      "hannah": "Profound and honest reflection on suffering and faith."
    }
  },
  "6": {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    reviews: {
      "ian": "Magical and honest storytelling that sparked my love for reading."
    }
  },
  "7": {
    author: "George Orwell",
    title: "1984",
    reviews: {
      "jessica": "A chilling and honest warning about totalitarianism."
    }
  },
  "8": {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    reviews: {
      "kevin": "An honest adventure that opened up a whole new world for me."
    }
  },
  "9": {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    reviews: {
      "lisa": "Honest depiction of the American Dream's fragility."
    }
  },
  "10": {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    reviews: {
      "michael": "Witty and honest social commentary wrapped in romance."
    }
  },
  "11": {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    reviews: {
      "nina": "Honest exploration of justice and racism."
    }
  },
  "12": {
    author: "Mark Twain",
    title: "Adventures of Huckleberry Finn",
    reviews: {
      "oliver": "An honest and humorous look at society and freedom."
    }
  }
};

// Helper function: Get book by ISBN (returns one book object or undefined)
books.getBookByISBN = function(isbn) {
  return books[isbn];
};

// Helper function: Get books by author (case-insensitive, array of books)
books.getBooksByAuthor = function(author) {
  return Object.values(books).filter(book =>
    book.author && book.author.toLowerCase() === author.toLowerCase()
  );
};

// Helper function: Get books by title (case-insensitive, array of books)
books.getBooksByTitle = function(title) {
  return Object.values(books).filter(book =>
    book.title && book.title.toLowerCase() === title.toLowerCase()
  );
};

// Helper function: Get reviews for a given book by ISBN (object of reviews)
books.getBookReviewByISBN = function(isbn) {
  if (books[isbn]) {
    return books[isbn].reviews || {};
  }
  return null;
};

module.exports = books;
