package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.BookDTO;
import com.androsiuk.lab_patterns.entity.Book;
import com.androsiuk.lab_patterns.mapper.BookMapper;
import com.androsiuk.lab_patterns.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/books")
@AllArgsConstructor
public class BookController {
    private final BookService bookService;
    private final BookMapper bookMapper;

    @GetMapping
    public ResponseEntity<List<BookDTO>> get(){
        List<BookDTO> dtoList = bookService.getAll().stream().map(bookMapper::map).toList();
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<BookDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(bookMapper.map(bookService.get(id)), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BookDTO> create(@RequestBody Book book) {
        return new ResponseEntity<>(bookMapper.map(bookService.create(book)), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<BookDTO> update(@PathVariable Integer id, @RequestBody Book book) {
        return new ResponseEntity<>(bookMapper.map(bookService.update(id, book)), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<BookDTO> delete(@PathVariable Integer id){
        return new ResponseEntity<>(bookMapper.map(bookService.delete(id)), HttpStatus.OK);
    }
}
