package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.UserCategory;
import com.androsiuk.lab_patterns.repository.UserCategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserCategoryService extends com.androsiuk.lab_patterns.service.Service<UserCategory> {
    private UserCategoryRepository userCategoryRepository;

    @Override
    public JpaRepository<UserCategory, Integer> getRepository() {
        return userCategoryRepository;
    }
}

