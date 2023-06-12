document.addEventListener("DOMContentLoaded", function() {
    const bookTable = document.getElementById("bookTable");
    let bookData = [];
  
    // fetch("your-backend-api-endpoint")
    //   .then(response => response.json())
    //   .then(data => {
    //     bookData = data;
    //     renderBookTable(bookData);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching book data:", error);
    //   });
  
    // Simulated book data
    bookData = [
      { title: "Book 1", author: "Author C", genre: "Genre B", status: "Available", id: 1 },
      { title: "Book 2", author: "Author A", genre: "Genre A", status: "Available", id: 2 },
      { title: "Book 3", author: "Author B", genre: "Genre C", status: "Available", id: 3 },
      { title: "Book 4", author: "Author A", genre: "Genre E", status: "Available", id: 4 },
      { title: "Book 5", author: "Author C", genre: "Genre A", status: "Available", id: 5 },
      { title: "Book 6", author: "Author E", genre: "Genre T", status: "Available", id: 6 },
      { title: "Book 7", author: "Author D", genre: "Genre B", status: "Available", id: 7 },
      { title: "Book 8", author: "Author K", genre: "Genre L", status: "Available", id: 8 },
    ];
  
    // Render the initial book table
    renderBookTable(bookData);
  
    // Sort the table column on header click
    bookTable.addEventListener("click", function(event) {
      if (event.target.tagName === "TH") {
        const column = event.target.dataset.column;
        sortTable(column);
      }
    });
  
    // Event listener for book description buttons
    bookTable.addEventListener("click", function(event) {
      if (event.target.classList.contains("bookDescriptionButton")) {
        const bookId = event.target.dataset.id;
        openBookDescriptionModal(bookId);
      }
    });
  
    // Function to render the book table
    function renderBookTable(data) {
      const tableBody = bookTable.querySelector("tbody");
      tableBody.innerHTML = "";
  
      data.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>${book.status}</td>
          <td><button class="bookDescriptionButton" data-id="${book.id}">View Description</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    // Function to sort the table column
    function sortTable(column) {
      const sortedData = [...bookData];
  
      sortedData.sort((a, b) => {
        const valA = a[column].toLowerCase();
        const valB = b[column].toLowerCase();
        return valA.localeCompare(valB);
      });
  
      renderBookTable(sortedData);
      bookData = sortedData;
    }
  });