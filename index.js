let saved_books = localStorage.getItem("save");
let ourBooks = [];
if (saved_books) {
  ourBooks = JSON.parse(saved_books);
} else {
  demo_data = [
    {
      id: 1,
      name: "Book1",
      author: "Author1",
    },
    {
      id: 2,
      name: "Book2",
      author: "Author2",
    },
  ];
  localStorage.setItem("save", JSON.stringify(demo_data));
  ourBooks = JSON.parse(saved_books);
  location.reload();
}

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
  ourBooks = ourBooks.filter((book) => {
    if (id === book.id) {
      return false;
    } else {
      return true;
    }
  });
  localStorage.setItem("save", JSON.stringify(ourBooks));
  location.reload();
}
// Add Books

const AddBtn = document.querySelector("#add_Button");
AddBtn.addEventListener("click", () => {
  let name = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let id = ourBooks[ourBooks.length - 1].id + 1;
  ourBooks.push({
    id,
    name,
    author,
  });
  localStorage.setItem("save", JSON.stringify(ourBooks));
  location.reload();
});
