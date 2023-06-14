package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.MonthlyReportDTO;
import com.androsiuk.lab_patterns.mapper.MonthlyReportMapper;
import com.androsiuk.lab_patterns.service.MonthlyReportService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/monthly_reports")
@AllArgsConstructor
public class MonthlyReportController {
    private final MonthlyReportService monthlyReportService;
    private final MonthlyReportMapper monthlyReportMapper;

    @GetMapping
    public ResponseEntity<List<MonthlyReportDTO>> get(){
        List<MonthlyReportDTO> dtoList = monthlyReportService.getAll().stream().map(monthlyReportMapper::map).toList();
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<MonthlyReportDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(monthlyReportMapper.map(monthlyReportService.get(id)), HttpStatus.OK);
    }
}
