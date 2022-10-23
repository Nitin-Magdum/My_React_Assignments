const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: "I AM IRON MAN",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 120000,
    },
  })
);
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "nitinmagdum@gmail.com" && password === "987654321") {
    req.session.isAuth = true;
    res.send("Logged In");
  }
});

app.get("/countView", function (req, res) {
  if (req.session.views) {
    req.session.views++;
    res.write("<p> No. of views: " + req.session.views + "</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end(" New session is started");
  }
});

app.post("/delete", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Logged out");
    } else {
      throw err;
    }
  });
});
app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
