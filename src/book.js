const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the schema
const BookSchema = new Schema({
    title: String 
})

//create the model
const Book = mongoose.model('books', BookSchema);

module.exports = Book;