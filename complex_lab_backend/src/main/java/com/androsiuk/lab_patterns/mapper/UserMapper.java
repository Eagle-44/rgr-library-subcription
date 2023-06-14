package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.UserDTO;
import com.androsiuk.lab_patterns.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements Mapper<User, UserDTO>{
    @Override
    public UserDTO map(User user) {
        UserDTO.UserDTOBuilder userDTOBuilder = UserDTO.builder();
        userDTOBuilder.id(user.getId());
        userDTOBuilder.fullName(user.getFullName());
        userDTOBuilder.email(user.getEmail());
        userDTOBuilder.password(user.getPassword());
        userDTOBuilder.balanceUah(user.getBalanceUah());
        userDTOBuilder.expirationDate(user.getExpirationDate());
        userDTOBuilder.userCategoryId(user.getUserCategory().getId());
        userDTOBuilder.userCatalogId(user.getUserCatalog().getId());
        return userDTOBuilder.build();
    }
}
