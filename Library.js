'use strict'

const libraryContainer = $('#libraryContainer');
const bookHeight = 200;
const bookWidth = 200;

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
    this.displayValue = [["", title], ["by ", author],
                            [pageCount, "pgs"], ["", readStatus]];
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

    newBook.element.className = "book";

    for(let i of newBook.displayValue) {
        console.log(i[0] + " + " + i[1]);
        newBook.element.innerHTML += i[0] + i[1] + "<br/>";
    }

    libraryContainer.appendChild(newBook.element);
}


function removeBookFromLibrary() {

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
 * Returns title of new book from user input.
 */
function getInputTitle() {
    return $('#newTitle').value;
}

/**
 * Returns author of new book from user input.
 */
function getInputAuthor() {
    return $('#newAuthor').value;
}

/**
 * Returns page count of new book from user input.
 */
function getInputPageCount() {
    return parseInt($('#newPages').value);
}

/**
 * Returns read status of new book from user input.
 */
function getInputReadStatus() {
    return $('#newRead').value;
}

/**
 * Function that queries and returns the element.
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }