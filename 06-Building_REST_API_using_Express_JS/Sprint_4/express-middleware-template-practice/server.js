const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/public/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.end();
});

const port = 3000 | process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
