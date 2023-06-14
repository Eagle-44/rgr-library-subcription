document.addEventListener("DOMContentLoaded", function() {
    const catalogSelect = document.getElementById("catalogSelect");
    const catalogTable = document.getElementById("catalogTable");
    const addBookButton = document.getElementById("addBookButton");
    const deleteBookButton = document.getElementById("deleteBookButton");
    const monthlyReportButton = document.getElementById("monthlyReportButton");
    const returnBookButton = document.getElementById("returnBookButton");


    // // Add book button click event handler
    // addBookButton.addEventListener("click", function() {
    //   // Logic for adding a book
    // });
    //
    // // Delete book button click event handler
    // deleteBookButton.addEventListener("click", function() {
    //   // Logic for deleting a book
    // });

    // Monthly report button click event handler
    monthlyReportButton.addEventListener("click", function() {

      // Redirect to the monthly report page
      window.location.href = "monthly_report.html";
    });


    returnBookButton.addEventListener("click", function() {

      // Redirect to the return book page
      window.location.href = "return_book_page.html";
    });

    // Catalog select change event handler
        catalogSelect.addEventListener("change", function() {
            const selectedOption = catalogSelect.value;

            // Logic for updating the table based on selected option
            if (selectedOption === "users") {
                fetch("http://localhost:8080/users")
                    .then(response => response.json())
                    .then(users => {
                        renderUsersTable(users);
                    })
                    .catch(error => {
                        console.error("Error fetching users:", error);
                    });
            } else if (selectedOption === "rentedBooks") {
                Promise.all([fetch("http://localhost:8080/loans"), fetch("http://localhost:8080/users")])
                    .then(([loansResponse, usersResponse]) => {
                        return Promise.all([loansResponse.json(), usersResponse.json()]);
                    })
                    .then(([loans, users]) => {
                        renderRentedBooksTable(loans, users);
                    })
                    .catch(error => {
                        console.error("Error fetching rented books and users:", error);
                    });
            }
        });

        // Function to render the users table
        function renderUsersTable(users) {
            catalogTable.innerHTML = `
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(user => `<tr><td>${user.id}</td><td>${user.fullName}</td></tr>`).join("")}
      </tbody>
    `;
        }

        // Function to render the rented books table
        function renderRentedBooksTable(loans, users) {
            catalogTable.innerHTML = `
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Rented Books ID</th>
        </tr>
      </thead>
      <tbody>
        ${loans.map(loan => {
                const user = users.find(user => user.id === loan.userId);
                return `<tr><td>${loan.userId}</td><td>${user.fullName}</td><td>${loan.bookId}</td></tr>`;
            }).join("")}
      </tbody>
    `;
        }
});


