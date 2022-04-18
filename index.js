let ourBooks = [{
    id: 1,
    name: "Book1",
    author: "Author1",
  },
  {
    id: 2,
    name: "Book2",
    author: "Author2",
  },
  {
    id: 3,
    name: "Book3",
    author: "Author3",
  },
  {
    id: 4,
    name: "Book4",
    author: "Author4",
  },
  {
    id: 5,
    name: "Book5",
    author: "Autho5",
  },
];

// Display Books
const BookList = document.querySelector("#book-list");
ourBooks.forEach((book) => {
  let new_book = ` 
 <p>${book.name}</p>
 <p>${book.author}</p>
 <button onclick=RemoveBook(${book.id}) >Remove</button>
 <hr>
 `;
  let Singlebook = document.createElement("div");
  Singlebook.classList.add("single-book");
  Singlebook.innerHTML = new_book;
  BookList.appendChild(Singlebook);
});

// Remove Books
function RemoveBook(id) {
  ourBooks = ourBooks.filter(book => {
    if (id === book.id) {
      return false;
    } else {
      return true;
    }
  })
  console.log(ourBooks);
}
// Add Books