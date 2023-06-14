package com.androsiuk.lab_patterns.controller;

import com.androsiuk.lab_patterns.DTO.UserDTO;
import com.androsiuk.lab_patterns.entity.User;
import com.androsiuk.lab_patterns.mapper.UserMapper;
import com.androsiuk.lab_patterns.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping(value = "/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping
    public ResponseEntity<List<UserDTO>> get(){
        List<UserDTO> dtoList = userService.getAll().stream().map(userMapper::map).toList();
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(userMapper.map(userService.get(id)), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDTO> create(@RequestBody User user) {
        return new ResponseEntity<>(userMapper.map(userService.create(user)), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Integer id, @RequestBody User user) {
        return new ResponseEntity<>(userMapper.map(userService.update(id, user)), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<UserDTO> delete(@PathVariable Integer id){
        return new ResponseEntity<>(userMapper.map(userService.delete(id)), HttpStatus.OK);
    }
}
