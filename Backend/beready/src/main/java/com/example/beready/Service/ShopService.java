package com.example.beready.Service;

import com.example.beready.Entity.Shop;
import com.example.beready.Repository.ShopRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShopService {
    
    private final ShopRepository shopRepository;

    public ShopService(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }

    public List<Shop> getAllProducts() {
        return shopRepository.findAll();
    }

    public Optional<Shop> getProductById(Long id) {
        return shopRepository.findById(id);
    }

    public Shop createProduct(Shop shop) {
        return shopRepository.save(shop);
    }

    public Shop updateProduct(Long id, Shop updatedShop) {
        return shopRepository.findById(id).map(shop -> {
            shop.setName(updatedShop.getName());
            shop.setImgUrl(updatedShop.getImgUrl());
            shop.setDescription(updatedShop.getDescription());
            shop.setPrice(updatedShop.getPrice());
            return shopRepository.save(shop);
        }).orElse(null);
    }

    public void deleteProduct(Long id) {
        shopRepository.deleteById(id);
    }
}
