let title = document.getElementById("title");
let author = document.getElementById("author");
let readingStatus = document.getElementById("readingStatus");
let submitBtn = document.getElementById("submitBtn");
let booksForm = document.getElementById("booksForm");
let searchBook = document.getElementById("searchBook");
let searchBtn = document.getElementById("searchBtn");

let booksData = [];
let book1 = new Book('Poteklo','Dan Brown',true);
let book2 = new Book('Zodiac','Dan Brown',false);
let book3 = new Book('Poteklo','Dan Brown',true);
let book4 = new Book('Poteklo','Dan Brown',true);

// Class Book
function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus.checked;
    this.status = function () {
        if (readingStatus.checked) {
            return `Allready read '${this.title}' by ${this.author}`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}`;
        }
    };
}

// Clear input form
function clearFields() {
    title.value = "";
    author.value = "";
    readingStatus.checked = false;
}

// Submit book and add into bookData storage
submitBtn.addEventListener("click", function () {
    if (title.value !== "" && author.value !== "") {
        let kniga = new Book(title.value, author.value, readingStatus);

        booksData.push(kniga);
        console.log(kniga.readingStatus);
        // console.log(booksData);
        console.log(kniga.status());
        clearFields();
    } else {
        alert("Please fill the fields Title and Author !!!");
    }
});

//search books and list all that books that contains search field
searchBtn.addEventListener("click", function () {
    console.log("Im in search button");
    booksForm.innerHTML = "";
    if (booksData != "") {
        booksForm.innerHTML += `<ul>`;
        booksData.forEach((element) => {
            if (element.title.includes(searchBook.value)) {
                booksForm.firstChild.innerHTML += `<li> ${element.title} from ${
                    element.author
                } and:: ${element.status()} </li> `;
            }
            booksForm.innerHTML += `</ul>`;
        });
    } else {
        alert(`There is no books in your data`);
    }
    console.log(booksData);
});


