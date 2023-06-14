package com.androsiuk.lab_patterns.repository;

import com.androsiuk.lab_patterns.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
