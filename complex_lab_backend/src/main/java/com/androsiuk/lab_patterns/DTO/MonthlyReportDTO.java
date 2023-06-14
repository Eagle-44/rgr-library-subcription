package com.androsiuk.lab_patterns.DTO;

import lombok.*;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MonthlyReportDTO {
    private Integer id;
    private Date month;
    private Double libraryIncome;
    private Double averageLoanIncome;
    private Double averageUserIncome;
    private Integer booksIssued;
    private Integer newBooks;
    private Integer booksWithdrawn;
    private Integer penaltiesNumber;
    private Integer libraryId;

}
