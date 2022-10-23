const express = require("express");
const bodyParser = require("body-parser");
const bookRoute = require("./Routes/bookRoutes");
const app = express();

app.use(bodyParser.json());
app.use("/api", bookRoute);

app.listen(3000, () => {
  console.log("listening on 3000");
});
