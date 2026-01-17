const axios = require("axios");

exports.getAllBooks = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/books");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookByISBN = async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/books/isbn/${req.params.isbn}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooksByAuthor = async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/books/author/${req.params.author}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooksByTitle = async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/books/title/${req.params.title}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
