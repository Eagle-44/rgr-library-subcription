package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.LibraryDTO;
import com.androsiuk.lab_patterns.entity.Library;
import org.springframework.stereotype.Component;

@Component
public class LibraryMapper implements Mapper<Library, LibraryDTO>{
    @Override
    public LibraryDTO map(Library library) {
        LibraryDTO.LibraryDTOBuilder libraryDTOBuilder = LibraryDTO.builder();
        libraryDTOBuilder.id(library.getId());
        libraryDTOBuilder.booksInRent(library.getBooksInRent());
        libraryDTOBuilder.balanceUaH(library.getBalanceUaH());
        libraryDTOBuilder.avgMonthlyIncome(library.getAvgMonthlyIncome());
        libraryDTOBuilder.lastMonthIncome(library.getLastMonthIncome());
        libraryDTOBuilder.lastMonthPenalties(library.getLastMonthPenalties());
        libraryDTOBuilder.foundationDate(library.getFoundationDate());
        return libraryDTOBuilder.build();
    }
}
