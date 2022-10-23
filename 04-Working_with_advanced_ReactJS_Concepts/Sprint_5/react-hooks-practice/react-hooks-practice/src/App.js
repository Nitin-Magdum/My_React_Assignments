import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import AddBooks from "./Components/AddBooks/addBooks";
import ManageBooks from "./Components/ManageBooks/manageBooks";
import CardBook from "./Components/CardBook/cardBook";

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
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
