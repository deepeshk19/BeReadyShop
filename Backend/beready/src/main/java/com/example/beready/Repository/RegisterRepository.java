package com.example.beready.Repository;

import com.example.beready.Entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RegisterRepository extends JpaRepository<Register, Long> {
    Optional<Register> findByEmail(String email);
}
