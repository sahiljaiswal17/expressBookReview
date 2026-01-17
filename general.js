/**
 * general.js
 * -----------
 * This file contains all public (non-authenticated) APIs
 * for retrieving book information from the Express Book Review server.
 *
 * Features:
 * - Retrieve all books
 * - Retrieve books by ISBN
 * - Retrieve books by Author
 * - Retrieve books by Title
 *
 * Technology Used:
 * - Axios for HTTP requests
 * - async/await for asynchronous handling
 */

const axios = require("axios");

/**
 * GET /books
 * ----------------
 * Retrieves the complete list of available books.
 *
 * Response:
 * - 200: Returns all books
 * - 404: No books found
 * - 500: Server error
 */
exports.getAllBooks = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/books");

    if (!response.data || Object.keys(response.data).length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * GET /books/isbn/:isbn
 * ---------------------
 * Retrieves book details for a specific ISBN.
 *
 * Params:
 * - isbn: Unique identifier of the book
 *
 * Response:
 * - 200: Book found
 * - 404: Book not found
 * - 500: Server error
 */
exports.getBookByISBN = async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const response = await axios.get(
      `http://localhost:5000/books/isbn/${isbn}`
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * GET /books/author/:author
 * -------------------------
 * Retrieves all books written by a specific author.
 *
 * Params:
 * - author: Name of the author
 *
 * Response:
 * - 200: Books found
 * - 404: No books found for the author
 * - 500: Server error
 */
exports.getBooksByAuthor = async (req, res) => {
  try {
    const author = req.params.author;
    const response = await axios.get(
      `http://localhost:5000/books/author/${author}`
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      return res
        .status(404)
        .json({ message: "No books found for this author" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * GET /books/title/:title
 * -----------------------
 * Retrieves all books matching a given title.
 *
 * Params:
 * - title: Title of the book
 *
 * Response:
 * - 200: Books found
 * - 404: No books found with the given title
 * - 500: Server error
 */
exports.getBooksByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const response = await axios.get(
      `http://localhost:5000/books/title/${title}`
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      return res
        .status(404)
        .json({ message: "No books found with this title" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
