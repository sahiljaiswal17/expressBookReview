const axios = require('axios');

exports.getAllBooks = async (req, res) => {
  const response = await axios.get("http://localhost:5000/books");
  res.json(response.data);
};

exports.getBookByISBN = async (req, res) => {
  const response = await axios.get(`http://localhost:5000/books/isbn/${req.params.isbn}`);
  res.json(response.data);
};

exports.getBooksByAuthor = async (req, res) => {
  const response = await axios.get(`http://localhost:5000/books/author/${req.params.author}`);
  res.json(response.data);
};

exports.getBooksByTitle = async (req, res) => {
  const response = await axios.get(`http://localhost:5000/books/title/${req.params.title}`);
  res.json(response.data);
};
