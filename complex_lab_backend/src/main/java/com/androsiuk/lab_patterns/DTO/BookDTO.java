package com.androsiuk.lab_patterns.DTO;

import lombok.*;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    private Integer id;
    private String name;
    private String author;
    private Integer pages;
    private String genre;
    private Double pledgeCost;
    private Double rentalDefaultCost;
    private Double rentalExtraDayPrice;
    private Date inServiceSince;
    private Boolean isRented;
    private Date returnDate;
    private Integer libraryId;
    private Set<Integer> loanIds;

    public static BookDTOBuilder builder(){
        return new BookDTOBuilder();
    }

    private BookDTO(BookDTOBuilder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.author = builder.author;
        this.pages = builder.pages;
        this.genre = builder.genre;
        this.pledgeCost = builder.pledgeCost;
        this.rentalDefaultCost = builder.rentalDefaultCost;
        this.rentalExtraDayPrice = builder.rentalExtraDayPrice;
        this.inServiceSince = builder.inServiceSince;
        this.isRented = builder.isRented;
        this.returnDate = builder.returnDate;
        this.libraryId = builder.libraryId;
        this.loanIds = builder.loanIds;
    }

    @NoArgsConstructor
    @Setter
    public static class BookDTOBuilder{
        private Integer id;
        private String name;
        private String author;
        private Integer pages;
        private String genre;
        private Double pledgeCost;
        private Double rentalDefaultCost;
        private Double rentalExtraDayPrice;
        private Date inServiceSince;
        private Boolean isRented;
        private Date returnDate;
        private Integer libraryId;
        private Set<Integer> loanIds;

        public BookDTO build(){
            return new BookDTO(this);
        }

    }
}
