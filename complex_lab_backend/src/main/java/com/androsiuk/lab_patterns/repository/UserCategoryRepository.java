package com.androsiuk.lab_patterns.repository;

import com.androsiuk.lab_patterns.entity.UserCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  UserCategoryRepository extends JpaRepository<UserCategory, Integer> {
}
