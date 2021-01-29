'use strict'

const libraryContainer = $('#libraryContainer');
let myLibrary = [];
let locationCounter = 0;

addGeneralButtonListeners();

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
    this.location;
}

/**
 * Adds book to library, both logically and on-page.
 * @param {*} title Title of the book
 * @param {*} author Author of the book
 * @param {*} pageCount Number of pages in the book
 * @param {*} readStatus Has the user read the book?
 */
function addBookToLibrary(title, author, pageCount, readStatus) {
    let newBook = new Book(title, author, pageCount, readStatus); //Create newBook object
    newBook.location = myLibrary.length; //set newBooks location for reference later
    myLibrary.push(newBook); //add newBook to the myLibrary array

    assembleBook(newBook);
    refreshLibrary();
}

function assembleBook(book) {
    book.element.className = "book";

    let left = document.createElement('div');
    left.className = 'book-left';
    left.innerHTML = book.title + "<br/>" + "by " + book.author;

    let right = document.createElement('div');
    right.className = 'book-right';
    right.innerHTML = "<div class='book-right'>" + book.pageCount + "pg <br/></div>"

    const remButton = document.createElement('button');
    //remButton.id = 'removeBook';
    remButton.innerHTML = 'Remove';
    remButton.className = 'book-right';

    book.element.appendChild(left);
    right.appendChild(remButton);
    book.element.appendChild(right);
}

function removeBookFromLibrary(book) {

}

function refreshLibrary() {
    /*for(let i of myLibrary) {
        libraryContainer.removeChild(i);
    }*/

    for(let i of myLibrary) {
        libraryContainer.appendChild(i.element);
    }
}

/**
 * Adds static button listeners.
 */
function addGeneralButtonListeners() {
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        button.addEventListener('click', (e) => {
            switch(e.target.id) {
                case "addBook":
                    addBookToLibrary(getInputTitle(), getInputAuthor(),
                                        getInputPageCount(), getInputReadStatus());
                break;
            }
        });
     });
}

/**
 * Returns title from user input.
 */
function getInputTitle() {
    return $('#newTitle').value;
}

/**
 * Returns author from user input.
 */
function getInputAuthor() {
    return $('#newAuthor').value;
}

/**
 * Returns page count from user input.
 */
function getInputPageCount() {
    return parseInt($('#newPages').value);
}

/**
 * Returns read status from user input.
 */
function getInputReadStatus() {
    return $('#newRead').value;
}

/**
 * Function that queries and returns the element.
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }