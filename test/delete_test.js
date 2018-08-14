const assert = require('assert');
const Book = require('../src/book');

describe('Deleting a book', () => {
    let book1;

    beforeEach((done) => {
        book1 = new Book({title: 'Oliver Twist'});
        book1.save()
            .then(() => done())
    })

    function assertTitle(operation, done) {
        operation 
            .then(() => Book.findOne({ title: 'Oliver Twist'}))
            .then((book) => {
                assert(book === null)
                done();
            })
    }

    it('model instance remove', (done) => {
        assertTitle(book1.remove(), done);
    })

    it('class method remove', (done) => {
        assertTitle(Book.remove({ title: 'Oliver Twist'}), done);
    })

    it('class method findAndRemove', (done) => {
        assertTitle(Book.findOneAndRemove({ title: 'Oliver Twist'}), done);
    })

    it('class method findByIdAndRemove', (done) => {
        assertTitle(Book.findByIdAndRemove(book1._id), done)
    })
    

})