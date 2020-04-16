const books = require('./book-functionalities');

// Add a book
books.addBook(5, "The Winds of Winter", "George R.R. Martin");

// Get a single book
console.log(books.getBook(1));
console.log(books.getBook(10));

// Set author
books.addBook(6, "Test", "No author");
books.addBook(7, "Test", "No author");
books.setAuthor('Test', 'Test Author');

// Delete book
books.deleteBook(7);

// Get books by author
console.log(books.getBooksByAuthor("George R.R. Martin"));

// Get all books
console.table(books.allBooks());