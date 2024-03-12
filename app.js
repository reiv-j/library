const myLibrary = [
    {
        title: "Game of Thrones",
        author: "George RR Martin",
        pages: 824,
        read: true,
    }
];

function addBookToLibrary(book) {
    myLibrary.push(book);
    return book;
}

const libraryContainer = document.querySelector(".library-container");

function displayLibrary() {
    myLibrary.forEach((book) => {
        const titleH2 = document.createElement("h2");
        const authorP = document.createElement("p");
        const pagesP = document.createElement("p");
        const readP = document.createElement("p");

        titleH2.textContent = book.title;
        authorP.textContent = book.author;
        pagesP.textContent = book.pages;
        readP.textContent = "placeholder";

        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(titleH2);
        card.appendChild(authorP);
        card.appendChild(pagesP);
        card.appendChild(readP);

        libraryContainer.appendChild(card);
    })
}