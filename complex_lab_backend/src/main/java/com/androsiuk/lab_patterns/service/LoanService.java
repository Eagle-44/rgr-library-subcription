package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.Loan;
import com.androsiuk.lab_patterns.repository.LoanRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoanService extends com.androsiuk.lab_patterns.service.Service<Loan> {
    private LoanRepository loanRepository;

    @Override
    public JpaRepository<Loan, Integer> getRepository() {
        return loanRepository;
    }
}
