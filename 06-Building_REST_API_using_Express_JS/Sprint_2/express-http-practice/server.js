const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let books = [
  {
    id: uuidv4(),
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    id: uuidv4(),
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    id: uuidv4(),
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    id: uuidv4(),
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    id: uuidv4(),
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "images/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
  },
  {
    id: uuidv4(),
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
  },
  {
    id: uuidv4(),
    author: "Unknown",
    country: "Iceland",
    imageLink: "images/njals-saga.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Njl's Saga",
    year: 1350,
  },
];

app.get("/getBooks", (req, res) => {
  res.send(books);
});

app.post("/addBook", (req, res) => {
  books.push({ ...req.body, id: uuidv4() });
  res.status(200).send({ msg: "book Added Successfully" });
});

app.put("/updateBook/:id", (req, res) => {
  let result = books.find((x) => x.id == req.params.id);
  let index = books.indexOf(result);
  books[index] = req.body;
  res.status(200).send({ msg: "book Updated Successfully" });
});

app.delete("/deleteBook/:id", (req, res) => {
  let result = books.find((x) => x.id == req.params.id);
  let index = books.indexOf(result);
  books.splice(index, 1);
  res.status(200).send({ msg: "books Deleted Successfully" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
