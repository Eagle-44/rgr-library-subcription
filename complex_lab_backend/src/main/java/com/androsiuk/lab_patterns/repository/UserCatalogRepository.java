package com.androsiuk.lab_patterns.repository;

import com.androsiuk.lab_patterns.entity.UserCatalog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCatalogRepository extends JpaRepository<UserCatalog, Integer> {
}
