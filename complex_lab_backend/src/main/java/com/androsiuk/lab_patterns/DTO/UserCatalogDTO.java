package com.androsiuk.lab_patterns.DTO;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserCatalogDTO {
    private Integer id;
    private Integer usersWithDueRent;
    private Integer usersWithOverdueRent;
}
