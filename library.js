// Author Class
var Author = /** @class */ (function () {
    function Author(authorId, name, biography) {
        this.authorId = authorId;
        this.name = name;
        this.biography = biography;
    }
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(bookId, title, author, genre) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = true;
    }
    return Book;
}());
// Member Class
var Member = /** @class */ (function () {
    function Member(memberId, name, email) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }
    Member.prototype.borrowBook = function (book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            return "".concat(this.name, " borrowed \"").concat(book.title, "\"");
        }
        else {
            return "\"".concat(book.title, "\" is currently unavailable");
        }
    };
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            return "".concat(this.name, " returned \"").concat(book.title, "\"");
        }
        else {
            return "".concat(this.name, " did not borrow \"").concat(book.title, "\"");
        }
    };
    return Member;
}());
// Library Class
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.authors = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.getAvailableBooks = function () {
        return this.books.filter(function (book) { return book.isAvailable; });
    };
    Library.prototype.getAllMembers = function () {
        return this.members;
    };
    Library.prototype.getAuthorBooks = function (authorId) {
        return this.books.filter(function (book) { return book.author.authorId === authorId; });
    };
    return Library;
}());
// Sample Usage
var library = new Library();
// Creating authors
var author1 = new Author(1, "J.K. Rowling", "British author, best known for the Harry Potter series.");
var author2 = new Author(2, "J.R.R. Tolkien", "English writer, best known for The Hobbit and The Lord of the Rings.");
// Adding authors to the library
library.addAuthor(author1);
library.addAuthor(author2);
// Creating books
var book1 = new Book(1, "Harry Potter and the Sorcerer's Stone", author1, "Fantasy");
var book2 = new Book(2, "The Hobbit", author2, "Fantasy");
// Adding books to the library
library.addBook(book1);
library.addBook(book2);
// Creating members
var member1 = new Member(1, "Alice", "alice@example.com");
var member2 = new Member(2, "Bob", "bob@example.com");
// Adding members to the library
library.addMember(member1);
library.addMember(member2);
// Member borrows a book
console.log(member1.borrowBook(book1));
console.log(member1.borrowBook(book1));
// Member returns a book
console.log(member1.returnBook(book1));
// Display available books
console.log(library.getAvailableBooks().map(function (book) { return book.title; }));
