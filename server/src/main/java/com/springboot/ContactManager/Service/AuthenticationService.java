package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Repository.UserRepository;
import com.springboot.ContactManager.dto.ErrorClassDTO;
import com.springboot.ContactManager.dto.SignInUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public ErrorClassDTO validateUser(User user) {
        if (user.getName() == null || user.getEmail() == null || user.getPhone() == null) {
            return ErrorClassDTO.createError("Invalid input!", "All fields are required!");
        }

        if (user.getName().length() < 3 || user.getName().length() > 50) {
            return ErrorClassDTO.createError("Invalid input!", "Name should be between 3 and 50 characters!");
        }

        if (userRepository.findByEmail(user.getEmail()) != null || userRepository.findByPhone(user.getPhone()) != null) {
            return ErrorClassDTO.createError("Invalid input!", "Email or Phone number already exists!");
        }

        return null;
    }

    public User signup(User user) {

        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setPhone(user.getPhone());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));

        newUser.setAddress(user.getAddress());
        newUser.setCity(user.getCity());
        newUser.setState(user.getState());
        newUser.setPincode(user.getPincode());

        newUser.setGithub(user.getGithub());
        newUser.setLinkedin(user.getLinkedin());
        newUser.setInstagram(user.getInstagram());
        newUser.setLikes(user.getLikes());
        newUser.setMovie(user.getMovie());
        newUser.setInterests(user.getInterests());

        newUser.setImage(user.getImage());
        newUser.setBio_heading(user.getBio_heading());
        newUser.setBio_desc(user.getBio_desc());

        userRepository.save(newUser);
        return newUser;
    }

    public User authenticate(SignInUserDTO input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        User user = userRepository.findByEmail(input.getEmail());
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + input.getEmail());
        }
        return user;
    }
}