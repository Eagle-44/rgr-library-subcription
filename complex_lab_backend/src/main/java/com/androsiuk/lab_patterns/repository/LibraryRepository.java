package com.androsiuk.lab_patterns.repository;

import com.androsiuk.lab_patterns.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Integer> {
}