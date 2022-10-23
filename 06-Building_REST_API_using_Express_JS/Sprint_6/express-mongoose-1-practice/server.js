const mongoose = require("mongoose");

const url = `mongodb+srv://nitinmagdum:47xBFX4FUzYGvftK@cluster0.q1dxile.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Successfully Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
