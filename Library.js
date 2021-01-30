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
    myLibrary.push(newBook); //add newBook to the myLibrary array

    assembleBook(newBook);
    refreshLibrary();
}

/**
 * Constructs the html elements of a book and appends them to the page.
 * @param {*} book Book to be constructed and appended.
 */
function assembleBook(book) {
    book.element.className = "book";

    let left = document.createElement('div');
    left.className = 'book-left';
    left.innerHTML = book.title + "<br/>" + "by " + book.author;

    let right = document.createElement('div');
    right.className = 'book-right';
    right.innerHTML = "<div class='book-right'>" + book.pageCount + "pg <br/></div>"

    const remButton = document.createElement('button');
    remButton.id = 'removeBook';
    remButton.innerHTML = 'Remove';
    remButton.className = 'book-right';

    book.element.appendChild(left);
    right.appendChild(remButton);
    book.element.appendChild(right);
    addButtonListener(remButton);
}

/**
 * Removes a book from the logical and visual library.
 * @param {*} bookElement Visual book element to be identified logically and removed.
 */
function removeBookFromLibrary(bookElement) {
    libraryContainer.removeChild(bookElement);
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].element.innerHTML.trim() == bookElement.innerHTML.trim()) {
            myLibrary.splice(myLibrary[i], 1);
        }
    }
}

/**
 * Use logical library to reappend the entire visual library.
 */
function refreshLibrary() {
    for(let i of myLibrary) {
        libraryContainer.appendChild(i.element);
    }
}

/**
 * Adds general, constant button listeners.
 */
function addGeneralButtonListeners() {
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        addButtonListener(button);
     });
}

/**
 * Adds individual button listeners.
 * @param {*} button Button to be given a listener.
 */
function addButtonListener(button) {
    button.addEventListener('click', (e) => {
        switch(e.target.id) {
            case "addBook":
                addBookToLibrary(getInputTitle(), getInputAuthor(),
                                    getInputPageCount(), getInputReadStatus());
            break;

            case "removeBook":
                removeBookFromLibrary(e.target.parentNode.parentNode);
            break;
        }
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