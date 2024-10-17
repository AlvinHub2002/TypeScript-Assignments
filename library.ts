// Author Class
class Author {
    authorId: number;
    name: string;
    biography: string;

    constructor(authorId: number, name: string, biography: string) {
        this.authorId = authorId;
        this.name = name;
        this.biography = biography;
    }
}

class Book {
    bookId: number;
    title: string;
    author: Author;
    genre: string;
    isAvailable: boolean;

    constructor(bookId: number, title: string, author: Author, genre: string) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = true; 
    }
}

// Member Class
class Member {
    memberId: number;
    name: string;
    email: string;
    borrowedBooks: Book[];

    constructor(memberId: number, name: string, email: string) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    borrowBook(book: Book): string {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            return `${this.name} borrowed "${book.title}"`;
        } else {
            return `"${book.title}" is currently unavailable`;
        }
    }

    returnBook(book: Book): string {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            return `${this.name} returned "${book.title}"`;
        } else {
            return `${this.name} did not borrow "${book.title}"`;
        }
    }
}

// Library Class
class Library {
    private books: Book[] = [];
    private authors: Author[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addAuthor(author: Author): void {
        this.authors.push(author);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    getAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);
    }

    getAllMembers(): Member[] {
        return this.members;
    }

    getAuthorBooks(authorId: number): Book[] {
        return this.books.filter(book => book.author.authorId === authorId);
    }
}

// Sample Usage
const library = new Library();

// Creating authors
const author1 = new Author(1, "J.K. Rowling", "British author, best known for the Harry Potter series.");
const author2 = new Author(2, "J.R.R. Tolkien", "English writer, best known for The Hobbit and The Lord of the Rings.");

// Adding authors to the library
library.addAuthor(author1);
library.addAuthor(author2);

// Creating books
const book1 = new Book(1, "Harry Potter and the Sorcerer's Stone", author1, "Fantasy");
const book2 = new Book(2, "The Hobbit", author2, "Fantasy");

// Adding books to the library
library.addBook(book1);
library.addBook(book2);

// Creating members
const member1 = new Member(1, "Alice", "alice@example.com");
const member2 = new Member(2, "Bob", "bob@example.com");

// Adding members to the library
library.addMember(member1);
library.addMember(member2);

// Member borrows a book
console.log(member1.borrowBook(book1)); 
console.log(member1.borrowBook(book1)); 

// Member returns a book
console.log(member1.returnBook(book1)); 

// Display available books
console.log(library.getAvailableBooks().map(book => book.title)); 