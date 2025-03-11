package com.example.beready.Controller;

import com.example.beready.Entity.Shop;
import com.example.beready.Service.ShopService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shops")
public class ShopController {

    private final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    @GetMapping
    public List<Shop> getAllProducts() {
        return shopService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shop> getProductById(@PathVariable Long id) {
        Optional<Shop> shop = shopService.getProductById(id);
        return shop.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Shop createProduct(@RequestBody Shop shop) {
        return shopService.createProduct(shop);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shop> updateProduct(@PathVariable Long id, @RequestBody Shop updatedShop) {
        Shop shop = shopService.updateProduct(id, updatedShop);
        return shop != null ? ResponseEntity.ok(shop) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        shopService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}
