Certainly! Below is a complete, polished README file tailored for your **Book Review API (BookHaven API)** project. You can save this content as `README.md` in your project root folder and customize it further if needed.

# BookHaven API

The **Book Review API** is a RESTful web service built using **Node.js** and **Express.js** to facilitate the management of book reviews. Registered users can add, modify, and delete reviews for books, while all users can access information about books based on ISBN, author, and title. The API uses **JSON Web Tokens (JWT)** for secure user authentication and session management.

## Author

**Nandan S**  
- GitHub: [Nandan S](https://github.com/NANDAN-S-GMIT/)  
- LinkedIn: [Nandan S](https://www.linkedin.com/in/nandans-devloper/)  


## Features

- User registration and login
- Adding/modifying book reviews for registered users
- Listing books by ISBN, author, or title
- Retrieving book reviews for any book
- Secure authentication via JWT
- Lightweight, easy-to-use JSON data storage

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- JavaScript (ES6+)
- JSON for in-memory data storage

## Getting Started

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/NANDAN-S-GMIT/book-review-system.git
cd book-review-system
```

*(Replace `yourusername` and `book-review-system` with your actual GitHub username and repository name.)*

### 2. Install Dependencies

Install the necessary NPM packages:

```bash
npm install
```

### 3. Start the Application

Start the Express server:

```bash
node index.js
```

By default, the server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

| # | Endpoint                         | HTTP Method | Description                                      | Requires Auth? |
|---|---------------------------------|-------------|------------------------------------------------|----------------|
| 1 | `/register`                     | POST        | Register a new user with username and password | No             |
| 2 | `/login`                        | POST        | Login a registered user and get JWT token       | No             |
| 3 | `/auth/review/:isbn`            | PUT         | Add or modify a book review for a specific ISBN | Yes            |
| 4 | `/auth/review/:isbn`            | DELETE      | Delete your review of a book by ISBN             | Yes            |
| 5 | `/`                            | GET         | Get the list of all available books              | No             |
| 6 | `/isbn/:isbn`                  | GET         | Get details for a specific book via ISBN         | No             |
| 7 | `/author/:author`              | GET         | Get books by a specific author                    | No             |
| 8 | `/title/:title`                | GET         | Get books matching a specific title              | No             |
| 9 | `/review/:isbn`                | GET         | Get all reviews for a specific book by ISBN      | No             |

## Example Requests

### Register a User

```http
POST /register
Content-Type: application/json

{
  "username": "testuser",
  "password": "test123"
}
```

### Login

```http
POST /login
Content-Type: application/json

{
  "username": "testuser",
  "password": "test123"
}
```

**Response:**

```json
{
  "token": "your-jwt-token-here"
}
```

### Add or Modify a Review (Authorized)

```http
PUT /auth/review/1
Authorization: Bearer your-jwt-token
Content-Type: application/json

{
  "review": "This book was insightful and well-written."
}
```



## Acknowledgments

Special thanks to the Node.js and Express.js communities for providing powerful tools that make building robust web applications easier.

If you want, I can also help you create a formatted markdown file or add badges for build status, license, or GitHub stars for a more professional look. Just ask!
