const axios = require("axios");

/**
 * Task 11:
 * Retrieve all books
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
 * Task 11:
 * Retrieve book details by ISBN
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
 * Task 11:
 * Retrieve books by author
 */
exports.getBooksByAuthor = async (req, res) => {
  try {
    const author = req.params.author;

    const response = await axios.get(
      `http://localhost:5000/books/author/${author}`
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      return res.status(404).json({ message: "No books found for this author" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Task 11:
 * Retrieve books by title
 */
exports.getBooksByTitle = async (req, res) => {
  try {
    const title = req.params.title;

    const response = await axios.get(
      `http://localhost:5000/books/title/${title}`
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      return res.status(404).json({ message: "No books found with this title" });
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
