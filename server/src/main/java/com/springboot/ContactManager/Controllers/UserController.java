package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.dto.ErrorClass;
import com.springboot.ContactManager.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity getAllUsers() {

        try {
            List<User> users = userService.findAllUsers();
            return ResponseEntity.ok().body(users);
        } catch (Exception e) {
            ErrorClass error = new ErrorClass();

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

                ErrorClass error = createError("User not found!", "User with id = " + id + " not found!");
                return ResponseEntity.status(404).body(error);
            }

            return ResponseEntity.ok().body(user);
        } catch (Exception e) {
            ErrorClass error = createError("Internal Server Error!", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    @PostMapping("/add")
    public ResponseEntity addUser(@RequestBody User user) {

        try {
            ErrorClass error = validateUser(user);

            if (error != null) {
                return ResponseEntity.status(400).body(error);
            }

            User savedUser = userService.saveUser(user);

            return ResponseEntity.ok().body(savedUser);
        } catch (Exception e) {
            System.out.println(e);
            ErrorClass error = createError("Internal Server Error!", e.getMessage());

            return ResponseEntity.status(500).body(error);
        }
    }

    private ErrorClass validateUser(User user) {
        if (user.getName() == null || user.getEmail() == null || user.getPhone() == null || user.getImage() == null) {
            return createError("Invalid input!", "Please provide all the details!");
        }

        if (user.getName().length() < 3 || user.getName().length() > 50) {
            return createError("Invalid input!", "Name should be between 3 and 50 characters!");
        }

        if (userService.findByEmail(user.getEmail()) != null || userService.findByPhone(user.getPhone()) != null) {
            return createError("Invalid input!", "Email or Phone number already exists!");
        }

        return null;
    }

    private ErrorClass createError(String message, String details) {
        ErrorClass error = new ErrorClass();

        error.setMessage(message);
        error.setDetails(details);

        return error;
    }

    @PostMapping("/addContact/{id}")
    public ResponseEntity addContact(@RequestBody Contact contact, @PathVariable("id") Integer id) {
        try {

            User user = userService.findUserById(id);
            user.setId(id);
            if (user == null) {
                ErrorClass error = createError("User Not Found!", "User with id " + id + " does not exist");
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
            ErrorClass error = createError("Internal Server Error!", e.getMessage());

            return ResponseEntity.status(500).body(error);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable("id") Integer id) {

        try {
            User user = userService.findUserById(id);

            if (user == null) {
                ErrorClass error = createError("User not found!", "User with id = " + id + " not found!");

                return ResponseEntity.status(404).body(error);
            }

            userService.deleteUserById(id);
            return ResponseEntity.ok().body("User with id = " + id + " deleted successfully!");

        } catch (Exception e) {
            ErrorClass error = createError("Internal Server Error!", e.getMessage());

            return ResponseEntity.status(500).body(error);

        }
    }
}
