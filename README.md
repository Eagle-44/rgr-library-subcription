# Library Subcription

## General Requirements

1. Perform a preliminary analysis of the library domain and develop a Use Cases diagram of the system.
2. Design the architecture and application's UI using visual modeling and documentation techniques. Identify the main entities and create a UML class diagram representing the overall system.
3. Apply GoF software design patterns for all the required functionalities based on the specific domain and application requirements.
4. It is encouraged and evaluated to apply modern architectural styles, GRASP patterns, SOLID principles, and other best practices during the project development.
5. Store the necessary data for the functioning of the system in a database.
6. Implement a RESTful approach for building the application. The application should have a user-friendly web interface tailored to the specific library domain.
7. The project is developed in a team, formed by the instructor. The project report should clearly indicate the student's name and the functionality they implemented.
8. The project is hosted on GitHub, and each team member should have their own commit history.
9. There are no restrictions on the technologies used for project implementation. Different teams are expected to choose their own paths, showcasing their individual work.

## Project Task: Library

The task is to develop a system for a library subscription service. The library generates revenue by renting out a limited number of copies of various books. The system should track the library's financial performance.

Each book available for rental has a title, author, and genre. Depending on the book's value, there is a deposit amount (paid by the customer when renting the book) and a rental fee (paid by the customer upon returning the book, in addition to the deposit).

Readers interact with the library. All readers are registered in the catalog, which contains standard personal information (name, address, phone number, category). Each reader can make multiple visits to the library. Each book rental transaction is recorded, including the rental date and the expected return date (if a copy is available). 

Additionally, the system should include a fine system for any damage caused to the book and a discount system for certain categories of readers.

The following reports should be available to the user: an inventory report of available books, a report of issued books indicating overdue books, and a financial report of the library subscription.

Please note that this is a high-level overview of the project requirements. Refer to the project documentation for detailed specifications, design considerations, and implementation guidelines.

