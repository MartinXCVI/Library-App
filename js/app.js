let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages= pages
	this.read = read
};

Book.prototype.toggleRead = function() {
	this.read = !this.read;
}

function toggleRead(index) {
	myLibrary[index].toggleRead();
	renderBook();
}

function renderBook() {
	let libraryBook = document.querySelector('#my-library')
	libraryBook.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i];
		let bookElement = document.createElement("div")
		bookElement.classList = "book-box"
		bookElement.innerHTML = `
			<div class="box-header">
				<h3 class="book-title">${book.title}</h3>
				<h4 class="book-author">by ${book.author}</h4>
			</div>
			<div class="box-body">
				<p>${book.pages} pages</p>
				<p>${book.read ? "Read ☑️" : "Not read yet ❌"}</p>
				<button class="remove-btn" onClick="removeBook(${i})">Remove</button>
				<button class="toggle-read-btn" onClick="toggleRead(${i})">Toggle Read</button>
			</div>
			`;
		libraryBook.appendChild(bookElement)
	}
}

function removeBook(index) {
	myLibrary.splice(index, 1)
	renderBook()
};

function addBookToLibrary() {
	let title = document.querySelector('#book-title').value
	let author = document.querySelector('#book-author').value
	let pages = document.querySelector('#book-pages').value
	let read = document.querySelector('#read-book').checked
	let newBook = new Book(title, author, pages, read)
	myLibrary.push(newBook);
	renderBook()
};

let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener('click', () => {
	let newBookForm = document.querySelector('#new-book-form')
	newBookForm.style.display = "flex";
});

let submitMyBookBtn = document.querySelector('#submit-book-btn');

submitMyBookBtn.addEventListener('click', (event) => {
	event.preventDefault();
	addBookToLibrary()
})