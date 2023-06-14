package com.androsiuk.lab_patterns.DTO;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LibraryDTO {
    private Integer id;
    private Integer booksInRent;
    private Double balanceUaH;
    private Double avgMonthlyIncome;
    private Double lastMonthIncome;
    private Double lastMonthPenalties;
    private Date foundationDate;
}
