package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.Library;
import com.androsiuk.lab_patterns.repository.LibraryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.jpa.repository.JpaRepository;

@Service
@AllArgsConstructor
public class LibraryService extends com.androsiuk.lab_patterns.service.Service<Library> {
    private LibraryRepository libraryRepository;

    @Override
    public JpaRepository<Library, Integer> getRepository() {
        return libraryRepository;
    }
}
