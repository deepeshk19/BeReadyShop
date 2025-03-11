package com.example.beready.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.beready.Entity.Checkout;
import com.example.beready.Service.CheckoutService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS}) // Allow frontend to access this API
public class CheckoutController {
    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    // ✅ Get all orders
    @GetMapping
    public ResponseEntity<List<Checkout>> getAllOrders() {
        return ResponseEntity.ok(checkoutService.getAllCheckouts());
    }

    // ✅ Get order by ID
    @GetMapping("/{id}")
    public ResponseEntity<Checkout> getOrderById(@PathVariable Long id) {
        Optional<Checkout> checkout = checkoutService.getCheckoutById(id);
        return checkout.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

  
    

    // ✅ Delete an order
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        checkoutService.deleteCheckout(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> createCheckout(@RequestBody List<Checkout> checkouts) {
        return ResponseEntity.ok(Map.of("message", "Order placed successfully!"));

    }

    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptionsRequest() {
        return ResponseEntity.ok().build();
    }

}
