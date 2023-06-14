package com.androsiuk.lab_patterns.repository;

import com.androsiuk.lab_patterns.entity.MonthlyReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyReportRepository extends JpaRepository<MonthlyReport, Integer> {
}