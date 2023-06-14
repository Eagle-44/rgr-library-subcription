package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.UserCatalogDTO;
import com.androsiuk.lab_patterns.mapper.UserCatalogMapper;
import com.androsiuk.lab_patterns.service.UserCatalogService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/user_catalogs")
@AllArgsConstructor
public class UserCatalogController {
    private final UserCatalogService userCatalogService;
    private final UserCatalogMapper userCatalogMapper;

    @GetMapping
    public ResponseEntity<List<UserCatalogDTO>> get(){
        List<UserCatalogDTO> dtoList = userCatalogService.getAll().stream().map(userCatalogMapper::map).toList();
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserCatalogDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(userCatalogMapper.map(userCatalogService.get(id)), HttpStatus.OK);
    }
}