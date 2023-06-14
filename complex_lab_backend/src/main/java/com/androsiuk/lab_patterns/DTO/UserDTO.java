package com.androsiuk.lab_patterns.DTO;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private Integer id;
    private String fullName;
    private String email;
    private String password;
    private Double balanceUah;
    private Date expirationDate;
    private Integer userCategoryId;
    private Integer userCatalogId;
}
