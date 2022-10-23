const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    bookId:{
        type: String,
        required: true
    },
    bookName: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Users', userSchema, 'Users');