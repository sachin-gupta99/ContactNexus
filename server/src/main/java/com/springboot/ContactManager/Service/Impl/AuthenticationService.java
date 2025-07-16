package com.springboot.ContactManager.Service.Impl;

import com.amazonaws.HttpMethod;
import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Repository.UserRepository;
import com.springboot.ContactManager.dto.ErrorDTO;
import com.springboot.ContactManager.dto.SignInUserDTO;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final FileService fileService;
    private final JwtService jwtService;

    public ErrorDTO validateUser(User user) {
        if (user.getName() == null || user.getEmail() == null || user.getPhone() == null)
            return ErrorDTO.of("Invalid input!", "All fields are required!");

        if (user.getName().length() < 3 || user.getName().length() > 50)
            return ErrorDTO.of("Invalid input!", "Name should be between 3 and 50 characters!");

        if (userRepository.findByEmail(user.getEmail()) != null || userRepository.findByPhone(user.getPhone()) != null)
            return ErrorDTO.of("Invalid input!", "Email or Phone number already exists!");

        return null;
    }


    public int signup(User user, MultipartFile image) throws IOException {

        if (user == null)
            throw new IllegalArgumentException("User cannot be null");

        if (image == null)
            throw new IllegalArgumentException("Image cannot be null");

        ErrorDTO isUserValid = validateUser(user);
        ErrorDTO isImageValid = fileService.validateImage(image);

        if (isUserValid != null || isImageValid != null) {
            ErrorDTO error = isUserValid != null ? isUserValid : isImageValid;
            throw new IllegalArgumentException(error.getMessage());
        }

        System.out.println(user.getBioDescription() + " " + user.getBioHeading());

        String imageURL = fileService.uploadImageToS3(user.getEmail(), image, "profile");
        user.setImage(imageURL);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user).getId();
    }

    public User authenticate(SignInUserDTO inputUser) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        inputUser.getEmail(),
                        inputUser.getPassword()
                )
        );

        User user = userRepository.findByEmail(inputUser.getEmail());

        if (user == null)
            throw new UsernameNotFoundException("User not found with email: " + inputUser.getEmail());
        return user;
    }

    public Map<String, Object> login(SignInUserDTO user) {
        User authenticatedUser = authenticate(user);

        if (authenticatedUser == null) {
            throw new UsernameNotFoundException("User not found with email: " + user.getEmail());
        }

        authenticatedUser.setPassword(null);
        authenticatedUser.setImage(fileService.generateUrl(authenticatedUser.getImage(), HttpMethod.GET));

        String token = jwtService.generateToken(authenticatedUser);

        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("token", token);
        responseBody.put("Expiration", jwtService.getExpirationDateFromToken(token));
        responseBody.put("user", authenticatedUser);

        return responseBody;
    }
}