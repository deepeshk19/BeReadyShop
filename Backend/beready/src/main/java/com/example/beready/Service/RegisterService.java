package com.example.beready.Service;

import com.example.beready.Entity.Register;
import com.example.beready.Repository.RegisterRepository;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;


@Service
public class RegisterService {

    private static final Logger logger = LoggerFactory.getLogger(RegisterService.class);

    @Autowired
    private RegisterRepository registerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Register registerUser(Register register) {
        
        // Check if email already exists
        Optional<Register> existingUser = registerRepository.findByEmail(register.getEmail());
        if (existingUser.isPresent()) {
            logger.error("Email already in use: " + register.getEmail());
            throw new RuntimeException("Email already in use!");
        }

        // Hash password before saving
        register.setPassword(passwordEncoder.encode(register.getPassword()));

        // Save user
        return registerRepository.save(register);
    }

    public Optional<Register> findByEmail(String email) {
        return registerRepository.findByEmail(email);
    }
}
