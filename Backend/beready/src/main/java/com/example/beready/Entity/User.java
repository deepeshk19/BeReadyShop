package com.example.beready.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")  // Ensure the table name is clear
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;  // Change 'username' to 'email' for consistency

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;
}
