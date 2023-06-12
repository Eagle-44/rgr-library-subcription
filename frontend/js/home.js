// Open the book description modal when the description button is clicked
const descriptionButtons = document.querySelectorAll('.descriptionButton');
const modal = document.getElementById('descriptionModal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.getElementsByClassName('close')[0];
const bookDescription = document.getElementById('bookDescription');

descriptionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const bookName = this.parentNode.parentNode.querySelector('[data-sort="title"]').innerText;
    const author = this.parentNode.parentNode.querySelector('[data-sort="author"]').innerText;
    const pages = 300; // Example value, replace with the actual number of pages
    const genre = this.parentNode.parentNode.querySelector('[data-sort="genre"]').innerText;
    const pledgeCost = 10.99; // Example value, replace with the actual pledge cost
    const rentalDefaultCost = 2.99; // Example value, replace with the actual default rental cost
    const rentalExtraDayPrice = 0.99; // Example value, replace with the actual extra day price
    const inServiceSince = new Date('2022-01-01'); // Example value, replace with the actual date
    const isRented = false; // Example value, replace with the actual rental status
    const returnDate = null; // Example value, replace with the actual return date if rented

    const descriptionHTML = `
      <p><strong>Book Name:</strong> ${bookName}</p>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Genre:</strong> ${genre}</p>
      <p><strong>Pledge Cost:</strong> $${pledgeCost}</p>
      <p><strong>Rental Default Cost:</strong> $${rentalDefaultCost}</p>
      <p><strong>Rental Extra Day Price:</strong> $${rentalExtraDayPrice}</p>
      <p><strong>In Service Since:</strong> ${inServiceSince}</p>
      <p><strong>Is Rented:</strong> ${isRented ? 'Yes' : 'No'}</p>
      <p><strong>Return Date:</strong> ${returnDate ? returnDate : 'N/A'}</p>
    `;

    bookDescription.innerHTML = descriptionHTML;
    modal.style.display = 'block';
  });
});

// Close the modal when the close button or outside the modal is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modalContent) {
    modal.style.display = 'none';
  }
});
//sorting
document.addEventListener("DOMContentLoaded", function() {
    const sortButtons = document.querySelectorAll(".sortButton");
    const bookTable = document.getElementById("bookTable");
    const tableBody = bookTable.querySelector("tbody");
    let books = Array.from(tableBody.getElementsByTagName("tr"));
  
    // Sort function for sorting by author
    const sortByAuthor = function() {
      books.sort(function(a, b) {
        const authorA = a.querySelector('[data-sort="author"]').textContent;
        const authorB = b.querySelector('[data-sort="author"]').textContent;
        return authorA.localeCompare(authorB);
      });
      updateTable();
    };
  
    // Sort function for sorting by genre
    const sortByGenre = function() {
      books.sort(function(a, b) {
        const genreA = a.querySelector('[data-sort="genre"]').textContent;
        const genreB = b.querySelector('[data-sort="genre"]').textContent;
        return genreA.localeCompare(genreB);
      });
      updateTable();
    };
  
    // Update the table with the sorted books
    const updateTable = function() {
      tableBody.innerHTML = "";
      books.forEach(function(book) {
        tableBody.appendChild(book);
      });
    };
  
    // Add click event listeners to the sort buttons
    sortButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const sortType = this.dataset.sort;
        if (sortType === "author") {
          sortByAuthor();
        } else if (sortType === "genre") {
          sortByGenre();
        }
      });
    });
  });
 
  
  
  
  
  
  
  


  
