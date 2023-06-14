document.addEventListener("DOMContentLoaded", function() {
  const bookTable = document.getElementById("bookTable");
  let bookData = [];

  fetch("http://localhost:8080/books")
      .then(response => response.json())
      .then(data => {
        bookData = data;
        renderBookTable(bookData);
      })
      .catch(error => {
        console.error("Error fetching book data:", error);
      });

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

  // Event listener for rent book buttons
  bookTable.addEventListener("click", function(event) {
    if (event.target.classList.contains("rentBookButton")) {
      const bookTitle = event.target.getAttribute("data-title");
      document.getElementById("bookTitle").value = bookTitle;
      document.getElementById("rentDuration").value = "";
      document.getElementById("rentCost").value = "";

      document.getElementById("rentBookAside").style.display = "block";
    }
  });

  // Event listener for rent submit button
  document.getElementById("rentSubmitButton").addEventListener("click", function() {
    const rentDuration = document.getElementById("rentDuration").value;
    const bookTitle = document.getElementById("bookTitle").value;

    // Send the rent request to the backend and update the book status
    fetch("http://localhost:8080/books/{id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bookTitle, rentDuration })
    })
        .then(response => response.json())
        .then(data => {
          // Handle the response data as needed
          console.log("Rent request successful");
        })
        .catch(error => {
          console.error("Error sending rent request:", error);
        });

    // Reset the form and close the aside
    document.getElementById("rentBookAside").style.display = "none";
  });

  document.getElementById("cancelRentButton").addEventListener("click", function() {
    closeRentBookAside();
  });

  function renderBookTable(data) {
    const tableBody = bookTable.querySelector("tbody");
    tableBody.innerHTML = "";

    data.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.isRented}</td>
        <td>
          <button class="bookDescriptionButton" data-id="${book.id}">View Description</button>
          <button class="rentBookButton" data-title="${book.name}">Rent Book</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

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

  function openBookDescriptionModal(bookId) {
    console.log("Open book description for bookId:", bookId);
  }

  function closeRentBookAside() {
    document.getElementById("rentBookAside").style.display = "none";
  }
});