package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.UserCatalogDTO;
import com.androsiuk.lab_patterns.entity.UserCatalog;
import org.springframework.stereotype.Component;

@Component
public class UserCatalogMapper implements Mapper<UserCatalog, UserCatalogDTO>{
    @Override
    public UserCatalogDTO map(UserCatalog userCatalog) {
        UserCatalogDTO.UserCatalogDTOBuilder userCatalogDTOBuilder = UserCatalogDTO.builder();
        userCatalogDTOBuilder.id(userCatalog.getId());
        userCatalogDTOBuilder.usersWithDueRent(userCatalog.getUsersWithDueRent());
        userCatalogDTOBuilder.usersWithOverdueRent(userCatalog.getUsersWithOverdueRent());
        return userCatalogDTOBuilder.build();
    }
}
