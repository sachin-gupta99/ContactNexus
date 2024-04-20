package com.springboot.ContactManager.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/helper")
public class HelperController {

    private WebClient webClient;

    @Value("${unsplash.accessKey}")
    private String unsplashAccessKey;

    @Autowired
    public HelperController(WebClient webClient) {
        this.webClient = webClient;
    }

    @GetMapping("/background")
    public String getBackground() {
        String uri = "https://api.unsplash.com/photos/random?client_id=" + unsplashAccessKey + "&query=nature,water";
        String response = webClient.get().uri(uri).retrieve().bodyToMono(String.class).block();
        return response;
    }
}
