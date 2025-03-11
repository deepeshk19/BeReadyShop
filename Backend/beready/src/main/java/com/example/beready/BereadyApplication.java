package com.example.beready;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.beready", "com.example.beready.Config"})  // Include the config package in the scan
public class BereadyApplication {

    public static void main(String[] args) {
        SpringApplication.run(BereadyApplication.class, args);
    }
}
