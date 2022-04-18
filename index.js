/* eslint-disable  no-restricted-globals */
/* eslint-disable  no-unused-vars */
const SavedBooks = localStorage.getItem('save');
let ourBooks = [];
if (SavedBooks) {
  ourBooks = JSON.parse(SavedBooks);
} else {
  const DemoData = [
    {
      id: 1,
      name: 'Book1',
      author: 'Author1',
    },
    {
      id: 2,
      name: 'Book2',
      author: 'Author2',
    },
  ];
  localStorage.setItem('save', JSON.stringify(DemoData));
  ourBooks = JSON.parse(SavedBooks);
  location.reload();
}

// Display Books
const BookList = document.querySelector('#book-list');
ourBooks.forEach((book) => {
  const NewBook = ` 
 <p>${book.name}</p>
 <p>${book.author}</p>
 <button onclick=RemoveBook(${book.id}) >Remove</button>
 <hr>
 `;
  const Singlebook = document.createElement('div');
  Singlebook.classList.add('single-book');
  Singlebook.innerHTML = NewBook;
  BookList.appendChild(Singlebook);
});

// Remove Books
function RemoveBook(id) {
  ourBooks = ourBooks.filter((book) => {
    if (id === book.id) {
      return false;
    }
    return true;
  });
  localStorage.setItem('save', JSON.stringify(ourBooks));
  location.reload();
}
// Add Books

const AddBtn = document.querySelector('#add_Button');
AddBtn.addEventListener('click', () => {
  const name = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  let id = 0;
  if (ourBooks.length>0) {
     id = ourBooks[ourBooks.length - 1].id + 1;
  }
  ourBooks.push({
    id,
    name,
    author,
  });
  localStorage.setItem('save', JSON.stringify(ourBooks));
  location.reload();
});
