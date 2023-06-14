package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.UserCategoryDTO;
import com.androsiuk.lab_patterns.mapper.UserCategoryMapper;
import com.androsiuk.lab_patterns.service.UserCategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/user_categories")
@AllArgsConstructor
public class UserCategoryController {
    private final UserCategoryService userCategoryService;
    private final UserCategoryMapper userCategoryMapper;

    @GetMapping
    public ResponseEntity<List<UserCategoryDTO>> get(){
        List<UserCategoryDTO> dtoList = userCategoryService.getAll().stream().map(userCategoryMapper::map).toList();
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserCategoryDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(userCategoryMapper.map(userCategoryService.get(id)), HttpStatus.OK);
    }

}
