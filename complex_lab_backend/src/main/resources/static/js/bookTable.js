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

  renderBookTable(bookData);

  // Sort the table column on header click
  bookTable.addEventListener("click", function(event) {
    if (event.target.tagName === "TH") {
      const column = event.target.dataset.column;
      sortTable(column);
    }
  });

  bookTable.addEventListener("click", function(event) {
    if (event.target.classList.contains("bookDescriptionButton")) {
      const bookId = event.target.dataset.id;
      openBookDescriptionModal(bookId);
    }
  });

  // Event listener for rent book buttons
  bookTable.addEventListener("click", function(event) {
    if (event.target.classList.contains("rentBookButton")) {
      document.getElementById("rentBookAside").style.display = "block";
      document.getElementById("bookTitle").value = event.target.getAttribute("data-title");
      document.getElementById("rentSubmitButton").addEventListener("click", function() {
        const days = document.getElementById("rentDuration").value;
        const bookId = event.target.getAttribute("data-title");
        document.getElementById("bookTitle").value = bookId;
        const user = JSON.parse(localStorage.getItem('user'));
        const userId =  1;

        // Send the rent request to the backend and update the book status
        fetch("http://localhost:8080/loans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({userId, bookId,days})
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
    }
  });


  document.getElementById("cancelRentButton").addEventListener("click", function() {
    closeRentBookAside();
  });

  function renderBookTable(data) {
    const tableBody = bookTable.querySelector("tbody");
    tableBody.innerHTML = "";

    data.forEach(book => {
      const row = document.createElement("tr");
      if (!localStorage.getItem('user')) {
        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.isRented}</td>
        <td>
          <button class="bookDescriptionButton" data-id="${book.id}">View Description</button>
        </td>
      `;
      }else {
        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.isRented}</td>
        <td>
          <button class="bookDescriptionButton" data-id="${book.id}">View Description</button>
          <button id="rentBookButtonId" class="rentBookButton" data-title="${book.id}">Rent Book</buttonid>
        </td>
      `;
      }

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