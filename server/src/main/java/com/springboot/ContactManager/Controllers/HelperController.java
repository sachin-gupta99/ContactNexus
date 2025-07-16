package com.springboot.ContactManager.Controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/helper")
public class HelperController {

    private final WebClient webClient;
    private final String unsplashAccessKey;

    public HelperController(@Value("${unsplash.accessKey}") String unsplashAccessKey) {
        this.unsplashAccessKey = unsplashAccessKey;
        this.webClient = WebClient.builder().build();
    }

    @GetMapping("/background")
    public String getBackground() {
        String uri = "https://api.unsplash.com/photos/random?client_id=" + unsplashAccessKey + "&query=nature,water";
        return webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
