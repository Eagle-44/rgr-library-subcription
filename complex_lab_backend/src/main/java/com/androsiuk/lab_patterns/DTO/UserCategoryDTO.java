package com.androsiuk.lab_patterns.DTO;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserCategoryDTO {
    private Integer id;
    private String name;
    private Float discount;
}
