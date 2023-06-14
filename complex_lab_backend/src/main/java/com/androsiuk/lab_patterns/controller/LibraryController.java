package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.LibraryDTO;
import com.androsiuk.lab_patterns.mapper.LibraryMapper;
import com.androsiuk.lab_patterns.service.LibraryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(value = "/library")
@AllArgsConstructor
public class LibraryController {
    private final LibraryService libraryService;
    private final LibraryMapper libraryMapper;

    @GetMapping(path = "/{id}")
    public ResponseEntity<LibraryDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(libraryMapper.map(libraryService.get(id)), HttpStatus.OK);
    }
}
