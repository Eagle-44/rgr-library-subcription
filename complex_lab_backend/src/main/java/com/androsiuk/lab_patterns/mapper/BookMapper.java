package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.BookDTO;
import com.androsiuk.lab_patterns.entity.Book;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class BookMapper implements Mapper<Book, BookDTO>{
    @Override
    public BookDTO map(Book book) {
        BookDTO.BookDTOBuilder bookDTOBuilder = BookDTO.builder();
        bookDTOBuilder.setId(book.getId());
        bookDTOBuilder.setName(book.getName());
        bookDTOBuilder.setAuthor(book.getAuthor());
        bookDTOBuilder.setPages(book.getPages());
        bookDTOBuilder.setGenre(book.getGenre());
        bookDTOBuilder.setPledgeCost(book.getPledgeCost());
        bookDTOBuilder.setRentalDefaultCost(book.getRentalDefaultCost());
        bookDTOBuilder.setRentalExtraDayPrice(book.getRentalExtraDayPrice());
        bookDTOBuilder.setInServiceSince(book.getInServiceSince());
        bookDTOBuilder.setIsRented(book.getIsRented());
        bookDTOBuilder.setReturnDate(book.getReturnDate());
        bookDTOBuilder.setLibraryId(book.getLibrary().getId());

        Set<Integer> loanIds = new HashSet<>();
        book.getLoans().forEach((e) -> loanIds.add(e.getId()));

        bookDTOBuilder.setLoanIds(loanIds);
        return bookDTOBuilder.build();
    }
}
