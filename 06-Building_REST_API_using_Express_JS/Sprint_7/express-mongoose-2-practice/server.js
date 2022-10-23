const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use("/api", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/UserDATA");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongoDB");
  })
  .on("error", (err) => {
    console.log(err);
  });

const port = 3000 | process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
