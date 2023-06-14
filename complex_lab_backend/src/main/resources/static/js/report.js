document.addEventListener("DOMContentLoaded", function() {
    // Sample report data for multiple months
    const reportData = [
      {
        month: "June 2023",
        libraryIncome: 1500,
        booksIssued: 100,
        newBooks: 10,
        booksWithdrawn: 5,
        penaltiesNumbers: 20,
        averageLoanIncome: 15.5,
        averageUserIncome: 50.75
      },
      {
        month: "July 2023",
        libraryIncome: 1800,
        booksIssued: 120,
        newBooks: 15,
        booksWithdrawn: 8,
        penaltiesNumbers: 25,
        averageLoanIncome: 16.8,
        averageUserIncome: 55.25
      },
      {
        month: "August 2023",
        libraryIncome: 2000,
        booksIssued: 110,
        newBooks: 12,
        booksWithdrawn: 6,
        penaltiesNumbers: 18,
        averageLoanIncome: 17.2,
        averageUserIncome: 52.75
      }
    ];
  
    const monthSelect = document.getElementById("monthSelect");
    const reportContent = document.getElementById("reportContent");
  
    // Populate the month selection dropdown
    reportData.forEach((data, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = data.month;
      monthSelect.appendChild(option);
    });
  
    // Function to generate the report table
    function generateReportTable(monthIndex) {
      const selectedMonthData = reportData[monthIndex];
  
      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Library</th>
            <th>Month</th>
            <th>Library Income</th>
            <th>Books Issued</th>
            <th>New Books</th>
            <th>Books Withdrawn</th>
            <th>Penalties Numbers</th>
            <th>Average Loan Income</th>
            <th>Average User Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${selectedMonthData.library}</td>
            <td>${selectedMonthData.month}</td>
            <td>${selectedMonthData.libraryIncome}</td>
            <td>${selectedMonthData.booksIssued}</td>
            <td>${selectedMonthData.newBooks}</td>
            <td>${selectedMonthData.booksWithdrawn}</td>
            <td>${selectedMonthData.penaltiesNumbers}</td>
            <td>${selectedMonthData.averageLoanIncome}</td>
            <td>${selectedMonthData.averageUserIncome}</td>
          </tr>
        </tbody>
      `;
  
      // Clear previous table content and append the new table
      reportContent.innerHTML = "";
      reportContent.appendChild(table);
    }
  
    // Initial table generation with the first month's data
    generateReportTable(0);
  
    // Event listener for month selection change
    monthSelect.addEventListener("change", function() {
      const selectedMonthIndex = parseInt(this.value);
      generateReportTable(selectedMonthIndex);
    });
  });
  