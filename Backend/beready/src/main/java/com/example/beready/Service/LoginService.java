package com.example.beready.Service;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.beready.Entity.Register;
import com.example.beready.Repository.RegisterRepository;


import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j // Enables logging
public class LoginService {


    @Autowired
    private RegisterRepository registerRepository; // Fetch users from Register table

    @Autowired
    private PasswordEncoder passwordEncoder; // Secure password encoding

    /**
     * Find user by email.
     * @param email - User's email
     * @return Optional<Register> - User if found, otherwise empty
     */
    public Optional<Register> findByEmail(String email) {
        return registerRepository.findByEmail(email);
    }

    /**
     * Save user with password hashing.
     * @param user - Register entity with raw password
     * @return Register - Saved user
     */
    @Transactional
    public Register saveUser(Register user) {
        log.info("Saving user with email: {}", user.getEmail());
        String hashedPassword = passwordEncoder.encode(user.getPassword()); // Hash password before saving
        user.setPassword(hashedPassword);
        return registerRepository.save(user);
    }


    /**
     * Authenticate user by email and password.
     * @param email - User's email
     * @param rawPassword - Plain text password
     * @return boolean - true if authenticated, false otherwise
     */
    public boolean authenticateUser(String email, String rawPassword, HttpSession session) {
        Optional<Register> userOptional = findByEmail(email);
    
        if (userOptional.isEmpty()) {
            log.warn("Authentication failed: User not found with email {}", email);
            return false;
        }
    
        Register user = userOptional.get();
        boolean passwordMatches = passwordEncoder.matches(rawPassword, user.getPassword());
    
        if (passwordMatches) {
            session.setAttribute("user", user);  // ✅ Store user in session
            log.info("User {} logged in successfully", email);
        } else {
            log.warn("Authentication failed: Incorrect password for email {}", email);
        }
    
        return passwordMatches;
    }
    

        public Map<String, Boolean> checkLoginStatus(HttpSession session) {
            boolean isLoggedIn = session.getAttribute("user") != null; // Adjust based on your auth logic
            return Collections.singletonMap("isLoggedIn", isLoggedIn);
        }

        public void logout(HttpSession session) {
            session.invalidate();  // Destroy session
        }

        public boolean validateUser(String email, String password) {
            Optional<Register> userOptional = registerRepository.findByEmail(email); // Ensure you use the correct table
            
            if (userOptional.isEmpty()) {  
                log.warn("User not found for email: {}", email);
                return false;
            }
        
            Register user = userOptional.get();  
            
            boolean isPasswordCorrect = passwordEncoder.matches(password, user.getPassword());
            if (!isPasswordCorrect) {
                log.warn("Incorrect password for email: {}", email);
            }
        
            return isPasswordCorrect;
        }
        
        
        
        
}
