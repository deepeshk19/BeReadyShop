package com.example.beready.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.beready.Entity.Shop;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {
    
}
