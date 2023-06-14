package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.LoanDTO;
import com.androsiuk.lab_patterns.entity.Loan;
import org.springframework.stereotype.Component;

@Component
public class LoanMapper implements Mapper<Loan, LoanDTO>{
    @Override
    public LoanDTO map(Loan loan) {
        LoanDTO.LoanDTOBuilder loanDTOBuilder = LoanDTO.builder();
        loanDTOBuilder.id(loan.getId());
        loanDTOBuilder.issueDate(loan.getIssueDate());
        loanDTOBuilder.returnDate(loan.getReturnDate());
        loanDTOBuilder.userBalanceDeduction(loan.getUserBalanceDeduction());
        loanDTOBuilder.userId(loan.getUser().getId());
        loanDTOBuilder.bookId(loan.getBook().getId());
        return loanDTOBuilder.build();
    }
}
