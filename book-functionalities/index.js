const data = require('book-data');

module.exports.allBooks = () => {
    return data;
};

// Node: Allows same IDs.
module.exports.addBook = (id, name, author) => {
    let book = {id, name, author};

    data.push(book);
};

module.exports.getBook = (bookId) => {
    let bookSearchedFor = false;

    data.forEach(book => {
        if (book.id === bookId) bookSearchedFor = book;
    });

    return bookSearchedFor ? bookSearchedFor : `Book with id ${bookId} not found`;
};

module.exports.setAuthor = (bookName, author) => {
    data.forEach(book => {
        if (book.name === bookName) book.author = author;
    })
};

module.exports.deleteBook = (id) => {
    data.forEach((book, index) => {
        if (book.id === id) {
            data.splice(index, 1);
        }
    })
};

module.exports.getBooksByAuthor = (author) => {
    let booksByAuthor = [];

    data.forEach(book => {
        if (book.author === author) booksByAuthor.push(book)
    });

    return booksByAuthor.length ? booksByAuthor : `No books written by ${author} found`;
};
