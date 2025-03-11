package com.example.beready.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.beready.DTO.UserLoginRequest;
import com.example.beready.Service.LoginService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
@Slf4j
public class LoginController {

    @Autowired
    private LoginService loginService;

    // 🔹 LOGIN ENDPOINT
    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestBody UserLoginRequest request, HttpSession session) {
        log.info("Login attempt for email: {}", request.getEmail());

        boolean isValidUser = loginService.authenticateUser(request.getEmail(), request.getPassword(), session);

        if (isValidUser) {
            session.setAttribute("userEmail", request.getEmail());  
            session.setAttribute("isLoggedIn", true);  
            log.info("✅ User '{}' logged in successfully. Session ID: {}", request.getEmail(), session.getId());

            return ResponseEntity.ok(Map.of("message", "Login successful!"));
        } else {
            log.warn("❌ Invalid login attempt for email: {}", request.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials!"));
        }
    }

    // 🔹 CHECK LOGIN STATUS ENDPOINT
    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> checkLoginStatus(HttpSession session) {
        Boolean isLoggedIn = (Boolean) session.getAttribute("isLoggedIn");
        String email = (String) session.getAttribute("userEmail");

        log.info("🔎 Checking login status: isLoggedIn={}, email={}, Session ID: {}", isLoggedIn, email, session.getId());
        
        if (Boolean.TRUE.equals(isLoggedIn) && email != null) {
            return ResponseEntity.ok(Map.of("isLoggedIn", true, "email", email));
        }
        
        return ResponseEntity.ok(Map.of("isLoggedIn", false, "email", ""));
    }

    // 🔹 LOGOUT ENDPOINT
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        log.info("🔴 Logging out user. Session ID: {}", session.getId());
        
        session.invalidate();  // ✅ Destroy session
        return ResponseEntity.ok("Logged out successfully!");
    }
}
