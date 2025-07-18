package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Service.Impl.ParameterStoreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@AllArgsConstructor
@RequestMapping("/api/helper")
public class HelperController {

    private final ParameterStoreService parameterStoreService;
    private final WebClient webClient;

    @Value("${unsplash.accessKey}")
    private String unsplashAccessKeyPath;

    @GetMapping("/background")
    public String getBackground() {
        String uri = "https://api.unsplash.com/photos/random?client_id=" + parameterStoreService.getParameterValue(unsplashAccessKeyPath) + "&query=nature,water";
        return webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
