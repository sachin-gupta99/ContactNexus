package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Service.ContactService;
import com.springboot.ContactManager.dto.GlobalResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    @GetMapping("/{id}")
    public ResponseEntity<GlobalResponseDTO<Contact>> getContactById(@PathVariable("id") Integer id) {
        Contact contact = contactService.getContactById(id);
        return ResponseEntity.ok().body(GlobalResponseDTO.success(contact, "Contact found successfully!"));
    }
}
