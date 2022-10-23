const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");

function getUsers(req, res) {
  userModel.find({}, (err, data) => {
    if (!err) {
      res.status(200).send(data);
    }
  });
}

function getUser(req, res) {
  userModel.findOne({ bookId: req.params.id }, (err, data) => {
    if (data !== null) {
      res.status(200).send(data);
    } else if (data == null) {
      res.status(404).send({ status: 404, message: "user not found" });
    } else {
      throw err;
    }
  });
}

function addUser(req, res) {
  let user = new userModel({
    bookId: uuidv4(),
    bookName: req.body.bookName,
  });
  user.save((err) => {
    if (!err) {
      res.status(201).send({ message: "book added successfully" });
    } else {
      throw err;
    }
  });
}

function deleteUser(req, res) {
  userModel.deleteOne({ bookId: req.params.id }, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send({ message: "book deleted successfully" });
    }
  });
}

function updateUser(req, res) {
  userModel.updateOne({ bookId: req.params.id }, (err, data) => {
    if (data !== null) {
      userModel[userModel.indexOf(bookId)] = req.body;
      res.status(200).send({ message: "book updated successfully" });
    } else if (data == null) {
      res
        .status(404)
        .send({ status: 404, message: "user with that id does not exist" });
    }
  });
}

module.exports = { getUsers, getUser, addUser, deleteUser, updateUser };
