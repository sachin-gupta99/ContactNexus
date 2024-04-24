package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Service.AuthenticationService;
import com.springboot.ContactManager.Service.FileService;
import com.springboot.ContactManager.Service.JwtService;
import com.springboot.ContactManager.dto.ErrorClassDTO;
import com.springboot.ContactManager.dto.SignInUserDTO;
import com.springboot.ContactManager.dto.SignUpUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private FileService fileService;
    private JwtService jwtService;
    private AuthenticationService authenticationService;

    @Autowired
    public AuthController(FileService fileService, JwtService jwtService, AuthenticationService authenticationService) {
        this.fileService = fileService;
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/addUser")
    public ResponseEntity addUser(@ModelAttribute SignUpUserDTO userDTO, @RequestParam("image") MultipartFile image) throws IOException {

        try {
            ErrorClassDTO isUserValid = authenticationService.validateUser(userDTO.toUser(null));
            ErrorClassDTO isImageValid = fileService.validateImage(image);

            if (isUserValid != null || isImageValid != null) {
                return ResponseEntity.status(400).body(isUserValid != null ? isUserValid : isImageValid);
            }

            String imageURL = fileService.uploadImageToS3(userDTO.getEmail(), image, "profile");
            User user = userDTO.toUser(imageURL);

            authenticationService.signup(user);

            return ResponseEntity.ok().body("User added successfully!");
        } catch (Exception e) {

            ErrorClassDTO error = ErrorClassDTO.createError("Internal Server Error!", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@ModelAttribute SignInUserDTO userDTO) {
        try {
            User authenticatedUser = authenticationService.authenticate(userDTO);

            String token = jwtService.generateToken(authenticatedUser);

            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("token", token);
            responseBody.put("Expiration", jwtService.getExpirationDateFromToken(token));
//            responseBody.put("user", user);
            return ResponseEntity.ok().body(responseBody);

        } catch (Exception e) {
            ErrorClassDTO error = ErrorClassDTO.createError("Internal Server Error!", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }
}
