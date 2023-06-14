package com.androsiuk.lab_patterns.mapper;

import com.androsiuk.lab_patterns.DTO.UserCategoryDTO;
import com.androsiuk.lab_patterns.entity.UserCategory;
import org.springframework.stereotype.Component;

@Component
public class UserCategoryMapper implements Mapper<UserCategory, UserCategoryDTO>{
    @Override
    public UserCategoryDTO map(UserCategory userCategory) {
        UserCategoryDTO.UserCategoryDTOBuilder userCategoryDTOBuilder = UserCategoryDTO.builder();
        userCategoryDTOBuilder.id(userCategory.getId());
        userCategoryDTOBuilder.name(userCategory.getName());
        userCategoryDTOBuilder.discount(userCategory.getDiscount());
        return userCategoryDTOBuilder.build();
    }
}
