package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Service.Impl.AuthenticationService;
import com.springboot.ContactManager.dto.GlobalResponseDTO;
import com.springboot.ContactManager.dto.SignInUserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import lombok.AllArgsConstructor;

import java.io.IOException;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/addUser")
    public ResponseEntity<GlobalResponseDTO<Integer>> addUser(@ModelAttribute User user, @RequestParam("imageFile") MultipartFile image) throws IOException {
        // Set image name or process file as needed
        user.setImage(image.getOriginalFilename());
        int userId = authenticationService.signup(user, image);
        return ResponseEntity.ok().body(GlobalResponseDTO.success(userId, "User added successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@ModelAttribute SignInUserDTO user) {
        Map<String, Object> responseBody = authenticationService.login(user);
        return ResponseEntity.ok().body(GlobalResponseDTO.success(responseBody, "User logged in successfully"));
    }
}
