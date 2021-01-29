'use strict'

const libraryContainer = $('libraryContainer');
const bookHeight = 200;
const bookWidth = 200;

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
    this.element = document.createElement('div');
}

function addBookToLibrary(title, author, pageCount, readStatus) {
    newBook = new Book(title, author, pageCount, readStatus);
    myLibrary.push(newBook);

    newBook.element.style.width = etchContWidth + "px";
    newBook.element.style.height = etchContWidth + "px";

    libraryContainer.appendChild(newBook.element);
}

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', (e) => {
            //on button click... (.button.id)
        });
     });
