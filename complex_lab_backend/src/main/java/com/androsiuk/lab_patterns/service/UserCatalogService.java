package com.androsiuk.lab_patterns.service;

import com.androsiuk.lab_patterns.entity.UserCatalog;
import com.androsiuk.lab_patterns.repository.UserCatalogRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserCatalogService extends com.androsiuk.lab_patterns.service.Service<UserCatalog> {
    private UserCatalogRepository userCatalogRepository;

    @Override
    public JpaRepository<UserCatalog, Integer> getRepository() {
        return userCatalogRepository;
    }
}
