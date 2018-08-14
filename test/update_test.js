const assert = require('assert');
const Book = require('../src/book');

describe('Updating records', () => {
    let book1;

    beforeEach((done) => {
        book1 = new Book({ title: 'Oliver Twist'})
        book1.save()
            .then(() => done())
    })

    function assertTitle(operation, done) {
        operation   
            .then(() => Book.find({}))
            .then((books) => {
                assert(books.length === 1)
                assert(books[0].title === 'The Great Gatsby')
                done();
            })
    }

    it('instance type using set n save', (done) => {
        book1.set('title', 'The Great Gatsby');
        assertTitle(book1.save(), done)
    })

    it('A model instance can update', (done) => {
        assertTitle(book1.update({ title: 'The Great Gatsby'}), done)
    })

    it('A model class can update', (done) => {
        assertTitle(
            Book.update({ title: 'Oliver Twist'}, {title: 'The Great Gatsby'}),
            done    
        )
    })

    it('A model class can update one record', (done) => {
        assertTitle(
            Book.findOneAndUpdate({ title: 'Oliver Twist'}, { title: 'The Great Gatsby'}),
            done
        )
    })

    it('A model class can find a record with an Id and update', (done) => {
        assertTitle(
            Book.findByIdAndUpdate(book1._id, {title: 'The Great Gatsby'}),
            done
        )
    })
})