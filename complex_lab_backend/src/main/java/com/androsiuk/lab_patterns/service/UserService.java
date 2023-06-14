package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.User;
import com.androsiuk.lab_patterns.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService extends com.androsiuk.lab_patterns.service.Service<User> {
    private UserRepository userRepository;

    @Override
    public JpaRepository<User, Integer> getRepository() {
        return userRepository;
    }
}
