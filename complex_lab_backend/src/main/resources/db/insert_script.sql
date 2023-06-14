USE library;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM monthly_report;
DELETE FROM loan;
DELETE FROM book;
DELETE FROM `user`;
DELETE FROM library;
DELETE FROM user_catalog;
DELETE FROM user_category;


INSERT INTO user_category(`name`, discount) 
VALUES
('Regular', 1),
('Student', 0.25),
('Senior', 0.75),
('Military', 0.8),
('Clergy', 0.5);

INSERT INTO user_catalog(users_with_due_rent, users_with_overdue_rent) 
VALUES
(0, 0);


INSERT INTO `user`(full_name, email, `password`, balance_uah, expiration_date, user_category_id, user_catalog_id) 
VALUES
('Ivan Kovalenko', 'ikovalenko1991@gmail.com', 'kovalenkoivan19910505', 0, '2023-08-14', 1, 1),
('Ben Dover', 'bendover1984@gmail.com', '111111', 700, '2023-07-24', 1, 1),
('Dmytro Stepanenko', 'sstepanenko2005@gmail.com', 'dmytstep050505', 58, '2023-06-03', 2, 1),
('Yelena Holovach', 'holovachlena1965@gmail.com', '123456789', 1500, '2024-03-24', 3, 1),
('Onufriy Solovyov', 'oteconufriypcu@mail.ru', 'slavarossii111', 500, '2023-09-13', 5, 1),
('Van Darkholme', 'vandarkholme300@gmail.com', 'deepdarkfantasies', 1200, '2023-05-29', 5, 1),
('Andriy Kolesnikov', 'akolesnikov2007@gmail.com', 'ankol007', 27, '2023-11-25', 2, 1),
('Hai Lo', 'hailo2000@gmail.com', '1849375738', 250, '2024-02-24', 4, 1),
('Ostap Fedorenko', 'ofedorenko1989@gmail.com', 'fedorostap190789', 400, '2024-05-24', 4, 1),
('Sydir Fedyshyn', 'dsdsydir1960@ukr.net', 'sydirsydir111', 200, '2023-10-02', 3, 1);

INSERT INTO library(books_in_rent, balance_uah, avg_monthly_income, foundation_date) 
VALUES
(4, 12000, 1000, '1894-10-24');

INSERT INTO book(`name`, author, pages, genre, pledge_cost, rental_default_cost, rental_extra_day_price, in_service_since, is_rented, return_date, library_id) 
VALUES
('Makiivka City History, book 1', 'Mykola Haplanov', 384, 'Scientifical-Popular Documental', 300, 20, 3, '2006-11-12', 0, null, 1),
('Makiivka City History, book 2', 'Mykola Haplanov', 375, 'Scientifical-Popular Documental', 300, 20, 3, '2008-05-13', 0, null, 1),
('Makiivka City History, book 3', 'Mykola Haplanov', 396, 'Scientifical-Popular Documental', 300, 20, 3, '2010-07-09', 1, '2023-06-23', 1),
('Makiivka City History, book 4', 'Anatoliy Patana', 640, 'Scientifical-Popular Documental', 400, 10, 2, '2023-04-14', 0, null, 1),
('Harry Potter and the Philosopher`s Stone', 'J.K. Rowling', 223, 'Fantasy', 200, 15, 5, '1998-03-06', 0, null, 1),
('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 251, 'Fantasy', 210, 20, 6, '1999-06-05', 1, '2023-08-15', 1),
('The Lord of the Rings: The Fellowship of the Ring', 'J. R. R. Tolkien', 423, 'Fantasy', 250, 18, 4, '1960-01-16', 0, null, 1),
('Physics Olympiad Preparation Excercise', 'Mykola Savchenko', 666, 'Educational', 100, 10, 1, '1987-04-12', 0, null, 1),
('Ukrainian Folk Songs', 'Serhiy Havryliv', 125, 'Songbook', 120, 15, 2, '2004-12-02', 0, null, 1),
('Best Ukrainian Dishes', 'Hanna Sribna', 115, 'Recipe book', 115, 15, 2, '2007-09-06', 0, null, 1),
('Military Tactics Handbook', 'John Doe', 99, 'Military handbook', 500, 25, 10, '2014-06-11', 0, null, 1);

INSERT INTO loan(issue_date, return_date, user_balance_deduction, user_id, book_id) 
VALUES
('2023-05-23', '2023-06-23', 300, 4, 3),
('2023-05-15', '2023-08-15', 250, 1, 6),
('2022-06-18', '2022-08-18', 36, 3, 7),
('2023-02-24', '2023-03-24', 10, 5, 1);

INSERT INTO monthly_report(`month`, library_income, books_issued, new_books, books_withdrawn, penalties_number, average_loan_income, average_user_income, library_id) 
VALUES
('2023-02-28', 0, 1, 0, 3, 0, 0, 0, 1),
('2023-03-31', 10, 0, 0, 0, 0, 10, 1, 1),
('2023-04-30', 0, 0, 1, 0, 0, 0, 0, 1),
('2022-08-30', 36, 0, 0, 0, 0, 36, 9, 1);


SET SQL_SAFE_UPDATES = 1;
