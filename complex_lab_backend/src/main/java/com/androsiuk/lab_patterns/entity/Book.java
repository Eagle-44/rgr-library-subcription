package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "book")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="author", nullable = false)
    private String author;

    @Column(name="pages")
    private Integer pages;

    @Column(name="genre")
    private String genre;

    @Column(name="pledge_cost", nullable = false)
    private Double pledgeCost;

    @Column(name="rental_default_cost", nullable = false)
    private Double rentalDefaultCost;

    @Column(name="rental_extra_day_price", nullable = false)
    private Double rentalExtraDayPrice;

    @Column(name="in_service_since")
    private Date inServiceSince;

    @Column(name="is_rented")
    private Boolean isRented;

    @Column(name="return_date")
    private Date returnDate;

    @ManyToOne
    @JoinColumn(name = "library_id", referencedColumnName = "id", nullable = false)
    private Library library;

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
    private Set<Loan> loans;
}
