package com.springboot.ContactManager;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ContactManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactManagerApplication.class, args);
	}

	@PreDestroy
	public void destroy() {
		System.out.println("Application stopped...");
	}

	@PostConstruct
	public void init() {
		System.out.println("Application started...");
	}

}
