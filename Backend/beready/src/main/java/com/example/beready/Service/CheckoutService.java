package com.example.beready.Service;

import com.example.beready.Entity.Checkout;
import com.example.beready.Entity.Shop;
import com.example.beready.Repository.CheckoutRepository;
import com.example.beready.Repository.ShopRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CheckoutService {
    private final CheckoutRepository checkoutRepository;
    private final ShopRepository shopRepository;

    public CheckoutService(CheckoutRepository checkoutRepository, ShopRepository shopRepository) {
        this.checkoutRepository = checkoutRepository;
        this.shopRepository = shopRepository;
    }

    public List<Checkout> getAllCheckouts() {
        return checkoutRepository.findAll();
    }

    public Optional<Checkout> getCheckoutById(Long id) {
        return checkoutRepository.findById(id);
    }

    public List<Checkout> createCheckout(List<Checkout> checkouts) {
        for (Checkout checkout : checkouts) {
            Shop shop = shopRepository.findById(checkout.getShop().getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

            // Set shop and calculate total price
            checkout.setShop(shop);
            checkout.setTotalPrice(shop.getPrice().multiply(BigDecimal.valueOf(checkout.getQuantity())));
        }
        return checkoutRepository.saveAll(checkouts);
    }
    
    public void deleteCheckout(Long id) {
        checkoutRepository.deleteById(id);
    }
}
