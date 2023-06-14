package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table(name = "monthly_report")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class MonthlyReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="month", nullable = false)
    private Date month;

    @Column(name="library_income")
    private Double libraryIncome;

    @Column(name="average_loan_income")
    private Double averageLoanIncome;

    @Column(name="average_user_income")
    private Double averageUserIncome;

    @Column(name="books_issued")
    private Integer booksIssued;

    @Column(name="new_books")
    private Integer newBooks;

    @Column(name="books_withdrawn")
    private Integer booksWithdrawn;

    @Column(name="penalties_number")
    private Integer penaltiesNumber;

    @ManyToOne
    @JoinColumn(name = "library_id", referencedColumnName = "id", nullable = false)
    private Library library;

}
