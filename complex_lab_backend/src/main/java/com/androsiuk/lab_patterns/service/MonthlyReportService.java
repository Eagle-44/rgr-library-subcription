package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.MonthlyReport;
import com.androsiuk.lab_patterns.repository.MonthlyReportRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MonthlyReportService extends com.androsiuk.lab_patterns.service.Service<MonthlyReport> {
    private MonthlyReportRepository monthlyReportRepository;

    @Override
    public JpaRepository<MonthlyReport, Integer> getRepository() {
        return monthlyReportRepository;
    }
}
