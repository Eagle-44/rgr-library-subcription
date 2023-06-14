package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "user_category")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class UserCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="discount", nullable = false)
    private Float discount;

    @OneToMany(mappedBy = "userCategory", fetch = FetchType.LAZY)
    private Set<User> users;
}
