package com.springboot.ContactManager.Controllers;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Service.ContactService;
import com.springboot.ContactManager.dto.ErrorClassDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/{id}")
    public ResponseEntity getContactById(@PathVariable("id") Integer id) {
        try {
            Contact contact = contactService.getContactById(id);

            if (contact == null) {
                ErrorClassDTO error = createError("Contact not found!", "Contact with id = " + id + " not found!");
                return ResponseEntity.status(404).body(error);
            }

            return ResponseEntity.ok().body(contact);
        } catch (Exception e) {
            ErrorClassDTO error = createError("Internal Server Error!", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    private ErrorClassDTO createError(String message, String details) {
        ErrorClassDTO error = new ErrorClassDTO();
        error.setMessage(message);
        error.setDetails(details);
        return error;
    }
}
