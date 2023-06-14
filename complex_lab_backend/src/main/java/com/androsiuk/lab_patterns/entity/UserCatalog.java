package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "user_catalog")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class UserCatalog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="users_with_due_rent", nullable = false)
    private Integer usersWithDueRent;

    @Column(name="users_with_overdue_rent", nullable = false)
    private Integer usersWithOverdueRent;

    @OneToMany(mappedBy = "userCatalog", fetch = FetchType.LAZY)
    private Set<User> users;
}
