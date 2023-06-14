package com.androsiuk.lab_patterns.repository;


import com.androsiuk.lab_patterns.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  BookRepository extends JpaRepository<Book, Integer> {
}
