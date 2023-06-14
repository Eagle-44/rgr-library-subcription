package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "library")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="books_in_rent")
    private Integer booksInRent;

    @Column(name="balance_uah", nullable = false)
    private Double balanceUaH;

    @Column(name="avg_monthly_income")
    private Double avgMonthlyIncome;

    @Column(name="last_month_income")
    private Double lastMonthIncome;

    @Column(name="last_month_penalties")
    private Double lastMonthPenalties;

    @Column(name="foundation_date")
    private Date foundationDate;

    @OneToMany(mappedBy = "library", fetch = FetchType.LAZY)
    private Set<Book> books;

    @OneToMany(mappedBy = "library", fetch = FetchType.LAZY)
    private Set<MonthlyReport> monthlyReports;

}
