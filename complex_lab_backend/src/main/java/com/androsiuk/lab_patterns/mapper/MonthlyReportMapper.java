package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.MonthlyReportDTO;
import com.androsiuk.lab_patterns.entity.MonthlyReport;
import org.springframework.stereotype.Component;

@Component
public class MonthlyReportMapper implements Mapper<MonthlyReport, MonthlyReportDTO>{
    @Override
    public MonthlyReportDTO map(MonthlyReport monthlyReport) {
        MonthlyReportDTO.MonthlyReportDTOBuilder monthlyReportDTOBuilder = MonthlyReportDTO.builder();
        monthlyReportDTOBuilder.id(monthlyReport.getId());
        monthlyReportDTOBuilder.month(monthlyReport.getMonth());
        monthlyReportDTOBuilder.libraryIncome(monthlyReport.getLibraryIncome());
        monthlyReportDTOBuilder.averageLoanIncome(monthlyReport.getAverageLoanIncome());
        monthlyReportDTOBuilder.averageUserIncome(monthlyReport.getAverageUserIncome());
        monthlyReportDTOBuilder.booksIssued(monthlyReport.getBooksIssued());
        monthlyReportDTOBuilder.newBooks(monthlyReport.getNewBooks());
        monthlyReportDTOBuilder.booksWithdrawn(monthlyReport.getBooksWithdrawn());
        monthlyReportDTOBuilder.penaltiesNumber(monthlyReport.getPenaltiesNumber());
        monthlyReportDTOBuilder.libraryId(monthlyReport.getLibrary().getId());
        return monthlyReportDTOBuilder.build();
    }
}
