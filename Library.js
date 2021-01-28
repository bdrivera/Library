'use strict'

let myLibrary = [];

/**
 * Constructor for the book class.
 * @param {*} title Title of the book
 * @param {*} author Author of the book
 * @param {*} pageCount Number of pages in the book
 * @param {*} readStatus Has the user read the book?
 */
function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pageCount, readStatus) {
    myLibrary.push(new Book(title, author, pageCount, readStatus));
}
