import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

const ManageBooks = () => {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:3000/books");
    SetBook(result.data);
  };
  return (
    <Box component="span">
      <h1>All Books</h1>
      <Container maxWidth="sm">
        <ol>
          {books.map((book, index) => (
            <li key={book.id}>
              <Box sx={{ flexGrow: 1 }} key={book.id}></Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  {book.BookName}
                </Grid>
                <Grid item xs={4}>
                  <Button
                    size="small"
                    variant="contained"
                    type="button"
                    onClick={() => {
                      console.log(book.id);
                    }}
                  >
                    <Link
                      to={`/manage-books/${book.BookName}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Manage
                    </Link>
                  </Button>
                </Grid>
              </Grid>
              <br></br>
            </li>
          ))}
        </ol>
      </Container>
      <Outlet></Outlet>
    </Box>
  );
};
export default ManageBooks;
