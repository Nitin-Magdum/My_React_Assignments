import "./App.css";
import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";

import Footer from "./Components/Footer/footer";

import Home from "./Components/Home/home";

const AddBooks = React.lazy(() => import("./Components/AddBooks/addBooks"));

const ManageBooks = React.lazy(() =>
  import("./Components/ManageBooks/manageBooks")
);

const CardBook = React.lazy(() => import("./Components/CardBook/cardBook"));

function App() {
  const [books, SetBook] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const result = await axios.get("http://localhost:3000/books");
    SetBook(result.data);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Suspense fallback={<div>Loading... </div>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="add-books" element={<AddBooks></AddBooks>}></Route>
            <Route
              path="manage-books"
              element={<ManageBooks></ManageBooks>}
            ></Route>
            <Route
              path="/manage-books/:name"
              element={<CardBook books={books}></CardBook>}
            ></Route>
          </Routes>
        </Suspense>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
