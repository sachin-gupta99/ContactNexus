package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Service.FileService;
import com.springboot.ContactManager.Service.UserService;
import com.springboot.ContactManager.dto.ErrorClassDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private FileService fileService;

    @Autowired
    public UserController(UserService userService, FileService fileService) {
        this.userService = userService;
        this.fileService = fileService;
    }

    @GetMapping
    public ResponseEntity getAllUsers() {

        try {
            List<User> users = userService.findAllUsers();
            return ResponseEntity.ok().body(users);
        } catch (Exception e) {
            ErrorClassDTO error = new ErrorClassDTO();

            error.setMessage("Internal Server Error!");
            error.setDetails(e.getMessage());

            return ResponseEntity.status(500).body(error);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity getUserById(@PathVariable("id") Integer id) {

        try {
            User user = userService.findUserById(id);

            if (user == null) {

                ErrorClassDTO error = ErrorClassDTO.createError("User not found!", "User with id = " + id + " not found!");
                return ResponseEntity.status(404).body(error);
            }

            return ResponseEntity.ok().body(user);
        } catch (Exception e) {
            ErrorClassDTO error = ErrorClassDTO.createError("Internal Server Error!", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    @PostMapping("/addContact/{id}")
    public ResponseEntity addContact(@RequestBody Contact contact, @PathVariable("id") Integer id) {
        try {

            User user = userService.findUserById(id);
            if (user == null) {
                ErrorClassDTO error = ErrorClassDTO.createError("User Not Found!", "User with id " + id + " does not exist");
                return ResponseEntity.status(404).body(error);
            }

            contact.setUser(user);

            List<Contact> contacts = user.getContacts();

            if (contacts == null) {
                contacts = new ArrayList<>();
            }

            contacts.add(contact);
            user.setContacts(contacts);

            User savedUser = userService.saveUser(user);

            return ResponseEntity.ok().body(savedUser);
        } catch (Exception e) {
            ErrorClassDTO error = ErrorClassDTO.createError("Internal Server Error!", e.getMessage());

            return ResponseEntity.status(500).body(error);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable("id") Integer id) {

        try {
            User user = userService.findUserById(id);

            if (user == null) {
                ErrorClassDTO error = ErrorClassDTO.createError("User not found!", "User with id = " + id + " not found!");

                return ResponseEntity.status(404).body(error);
            }

            userService.deleteUserById(id);
            return ResponseEntity.ok().body("User with id = " + id + " deleted successfully!");

        } catch (Exception e) {
            ErrorClassDTO error = ErrorClassDTO.createError("Internal Server Error!", e.getMessage());

            return ResponseEntity.status(500).body(error);

        }
    }

    @PostMapping("/token")
    public UserDetails loadUserByUsername(@RequestBody String username) throws UsernameNotFoundException {
        return (UserDetails) userService.findByEmail(username);
    }
}
