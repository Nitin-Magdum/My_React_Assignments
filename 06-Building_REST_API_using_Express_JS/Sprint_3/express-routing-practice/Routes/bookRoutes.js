const express = require("express");
const bookRoute = express.Router();
const {
  getBooks,
  addBooks,
  updateBooks,
  deleteBook,
} = require("../controllers/bookControllers");

bookRoute.get("/books", getBooks);
bookRoute.post("/books", addBooks);
bookRoute.delete("/books/:id", deleteBook);
bookRoute.put("/books/:id", updateBooks);

module.exports = bookRoute;
