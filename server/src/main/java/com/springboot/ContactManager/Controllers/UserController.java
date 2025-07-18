package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Service.Impl.FileService;
import com.springboot.ContactManager.Service.UserService;
import com.springboot.ContactManager.dto.GlobalResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final FileService fileService;

    @GetMapping
    public ResponseEntity<GlobalResponseDTO<List<User>>> getAllUsers() {

        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok().body(GlobalResponseDTO.success(users, "Users fetched successfully!"));
    }

    @GetMapping("/{emailId}")
    public ResponseEntity<GlobalResponseDTO<User>> getUserByEmail(@PathVariable("emailId") String emailId) {

        User user = userService.findUserByEmail(emailId);

        user.setPassword(null);
        user.setImage(fileService.generateUrl(user.getImage()));

        return ResponseEntity.ok().body(GlobalResponseDTO.success(user, "User fetched successfully!"));
    }

    @PostMapping("/addContact/{id}")
    public ResponseEntity<GlobalResponseDTO<Contact>> addContact(@RequestBody Contact contact, @PathVariable("id") Integer id) {

        Contact newContact = userService.addContact(contact, id);
        return ResponseEntity.ok().body(GlobalResponseDTO.success(newContact, "Contact added successfully!"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GlobalResponseDTO<?>> deleteUser(@PathVariable("id") Integer id) {

        userService.deleteUserById(id);
        return ResponseEntity.ok().body(GlobalResponseDTO.success(null, "User deleted successfully!"));
    }

    @PostMapping("/verifyToken")
    public ResponseEntity verifyToken() {
        return ResponseEntity.ok().body("Token is valid!");
    }
}
