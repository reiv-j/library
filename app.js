const myLibrary = [
    {
        title: "Game of Thrones",
        author: "George RR Martin",
        nPages: 824,
        read: true,
    },
];

function addBookToLibrary(book) {
    myLibrary.push(book);
    return book;
}

function Book(title, author, nPages, read) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
}

const libraryContainer = document.querySelector(".library-container");

function displayLibrary() {
    libraryContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        const titleH2 = document.createElement("h2");
        const authorP = document.createElement("p");
        const pagesP = document.createElement("p");
        const readP = document.createElement("p");

        titleH2.textContent = book.title;
        authorP.textContent = book.author;
        pagesP.textContent = book.nPages;
        readP.textContent = book.read === true ? "Read" : "Not read";

        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(titleH2);
        card.appendChild(authorP);
        card.appendChild(pagesP);
        card.appendChild(readP);

        libraryContainer.appendChild(card);
    })
}

displayLibrary();

const openDialogBtn = document.querySelector("#open-dialog-btn")
const closeDialogBtn = document.querySelector("#close-dialog-btn")
const modal = document.querySelector(".modal");

openDialogBtn.addEventListener("click", function() {
    modal.showModal();
})

closeDialogBtn.addEventListener("click", function() {
    modal.close();
})

const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector("#new-book-form");

addBookBtn.addEventListener("click", function() {
    const newTitle = newBookForm.elements.title.value;
    const newAuthor = newBookForm.elements.author.value;
    const newPages = parseInt(newBookForm.elements.pages.value);
    const newRead = newBookForm.elements.read.value === "yes" ? true : false;

    const newBook = new Book(newTitle, newAuthor, newPages, newRead);

    addBookToLibrary(newBook);
    displayLibrary();

})