const assert = require('assert');
const Book = require('../src/book');

describe('Reading books out of the database', () => {
    let book1;

    beforeEach((done) => {
        book1 = new Book({ title: 'Oliver Twist'});
        book1.save()
            .then(() => done())
    })

    it('finds all books with the title of Oliver Twist', (done) => {
        Book.find({ title: 'Oliver Twist'})
            .then((books) => {
                assert((books[0]._id.toString() === book1._id.toString()));
                done();
            })
    })

    it('find a user with a particular id', (done) => {
        Book.findOne({ _id: book1._id})
            .then((book) => {
                assert(book.title === 'Oliver Twist');
                done();
            })
    })
})