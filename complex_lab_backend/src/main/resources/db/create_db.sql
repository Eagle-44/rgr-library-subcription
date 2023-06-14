CREATE SCHEMA IF NOT EXISTS library DEFAULT CHARACTER SET utf8 ;
USE library ;

DROP TABLE IF EXISTS library.monthly_report;
DROP TABLE IF EXISTS library.loan ;
DROP TABLE IF EXISTS library.book ;
DROP TABLE IF EXISTS library.library ;
DROP TABLE IF EXISTS library.`user` ;
DROP TABLE IF EXISTS library.user_catalog ;
DROP TABLE IF EXISTS library.user_category ;

CREATE TABLE IF NOT EXISTS library.user_category (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  discount FLOAT UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.user_catalog (
  id INT NOT NULL AUTO_INCREMENT,
  users_with_due_rent INT UNSIGNED NOT NULL,
  users_with_overdue_rent INT UNSIGNED NOT NULL,
  PRIMARY KEY (id)
  )
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.`user` (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  balance_uah DOUBLE NOT NULL,
  expiration_date DATE NULL,
  user_category_id INT NOT NULL,
  user_catalog_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_user_user_category1_idx (user_category_id ASC) VISIBLE,
  INDEX fk_user_user_catalog1_idx (user_catalog_id ASC) VISIBLE,
  CONSTRAINT fk_user_user_category1
    FOREIGN KEY (user_category_id)
    REFERENCES library.user_category (id),
  CONSTRAINT fk_user_user_catalog1
    FOREIGN KEY (user_catalog_id)
    REFERENCES library.user_catalog (id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.library (
  id INT NOT NULL AUTO_INCREMENT,
  books_in_rent INT UNSIGNED NULL,
  balance_uah DOUBLE NOT NULL,
  avg_monthly_income DOUBLE NULL,
  last_month_income DOUBLE NULL,
  last_month_penalties DOUBLE NULL,
  foundation_date DATE NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.book (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  pages INT UNSIGNED NULL,
  genre VARCHAR(45) NULL,
  pledge_cost DOUBLE UNSIGNED NOT NULL,
  rental_default_cost DOUBLE UNSIGNED NOT NULL,
  rental_extra_day_price DOUBLE UNSIGNED NOT NULL,
  in_service_since DATE NULL,
  is_rented TINYINT NULL,
  return_date DATE NULL,
  library_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX name_UNIQUE (`name` ASC) VISIBLE,
  INDEX fk_book_library1_idx (library_id ASC) VISIBLE,
  CONSTRAINT fk_book_library1
    FOREIGN KEY (library_id)
    REFERENCES library.library (id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.loan (
  id INT NOT NULL AUTO_INCREMENT,
  issue_date DATE NOT NULL,
  return_date DATE NOT NULL,
  user_balance_deduction DOUBLE NULL,
  user_id INT UNSIGNED NOT NULL,
  book_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_loan_user_idx (user_id ASC) VISIBLE,
  INDEX fk_loan_book1_idx (book_id ASC) VISIBLE,
  CONSTRAINT fk_loan_user
    FOREIGN KEY (user_id)
    REFERENCES library.`user` (id),
  CONSTRAINT fk_loan_book1
    FOREIGN KEY (book_id)
    REFERENCES library.book (id))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS library.monthly_report(
  id INT NOT NULL AUTO_INCREMENT,
  `month` DATE NOT NULL,
  library_income DOUBLE NULL,
  books_issued INT NULL,
  new_books INT NULL,
  books_withdrawn INT NULL,
  penalties_number INT NULL,
  average_loan_income DOUBLE NULL,
  average_user_income DOUBLE NULL,
  library_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX month_UNIQUE (month ASC) VISIBLE,
  INDEX fk_monthly_report_library1_idx (library_id ASC) VISIBLE,
  CONSTRAINT fk_monthly_report_library1
    FOREIGN KEY (library_id)
    REFERENCES library.library (id))
ENGINE = InnoDB;
