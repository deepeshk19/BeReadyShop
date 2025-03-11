package com.example.beready.Controller;

import com.example.beready.Entity.Register;
import com.example.beready.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for this controller
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @RequestMapping(value = "/register", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();  // Respond with a successful 200 OK for preflight requests
    }

    // Endpoint to register a user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Register register) {
        try {
            // Attempt to register the user using the service
            Register registeredUser = registerService.registerUser(register);

            // Return successful response with registered user details
            return ResponseEntity.ok(registeredUser);  // Return the registered user object
        } catch (RuntimeException e) {
            // Return error response in case of failure
            return ResponseEntity.status(400).body(new ErrorResponse(e.getMessage()));  // Return the custom error message
        }
    }

    // Custom error response object
    static class ErrorResponse {
        private String message;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}
