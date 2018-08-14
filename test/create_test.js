const assert = require('assert');
const Book = require('../src/book');

describe('Creating records', () => {
    it('saves a book', (done) => {
        const book1 = new Book({ title: 'Oliver Twist' });

        book1.save()
            .then(() => {
                assert(!book1.isNew);
                done();
            })
    })
})


