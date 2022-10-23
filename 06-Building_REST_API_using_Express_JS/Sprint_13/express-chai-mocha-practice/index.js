const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express");
});
app.get("/add", (req, res) => {
  res.json({ msg: "use a POST request" });
});
app.post("/add", (req, res) => {
  let var1 = parseInt(req.body.var1);
  let var2 = parseInt(req.body.var2);
  res.json({ result: var1 + var2 });
});
module.exports = app.listen(3000);
