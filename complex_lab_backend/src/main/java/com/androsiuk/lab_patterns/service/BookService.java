package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.Book;
import com.androsiuk.lab_patterns.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BookService extends com.androsiuk.lab_patterns.service.Service<Book> {
    private BookRepository bookRepository;

    @Override
    public JpaRepository<Book, Integer> getRepository() {
        return bookRepository;
    }
}
