package com.androsiuk.lab_patterns.DTO;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoanDTO {
    private Integer id;
    private Date issueDate;
    private Date returnDate;
    private Double userBalanceDeduction;
    private Integer userId;
    private Integer bookId;

}
