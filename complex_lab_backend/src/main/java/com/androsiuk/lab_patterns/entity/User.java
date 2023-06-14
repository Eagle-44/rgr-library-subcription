package com.androsiuk.lab_patterns.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;


    @Column(name="full_name", nullable = false)
    private String fullName;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name="balance_uah", nullable = false)
    private Double balanceUah;

    @Column(name="expiration_date")
    private Date expirationDate;

    @ManyToOne
    @JoinColumn(name = "user_category_id", referencedColumnName = "id", nullable = false)
    private UserCategory userCategory;

    @ManyToOne
    @JoinColumn(name = "user_catalog_id", referencedColumnName = "id", nullable = false)
    private UserCatalog userCatalog;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Loan> loans;

}
