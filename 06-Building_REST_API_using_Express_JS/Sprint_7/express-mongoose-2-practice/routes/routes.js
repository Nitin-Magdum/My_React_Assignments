const express = require('express');
const {getUsers, getUser, addUser, deleteUser, updateUser} = require('../controllers/controller');
const router = express.Router();

router.get('/getBooks', getUsers);
router.get('/getBook/:id', getUser);
router.post('/addBook', addUser);
router.delete('/deleteBook/:id', deleteUser);
router.put('/updateBook/:id', updateUser);

module.exports=router;