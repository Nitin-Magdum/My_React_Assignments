import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Home = () => {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:3000/books");
    SetBook(result.data);
  };
  return (
    <Box component="span" style={{ backgroundColor: "blue" }}>
      <h1>All Books</h1>
      <Container
        maxWidth="sm"
        sx={{
          border: "1px solid black",
        }}
      >
        <ol>
          {books.map((book, index) => (
            <li key={index}>{book.BookName}</li>
          ))}
        </ol>
      </Container>
    </Box>
  );
};
export default Home;
