package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springboot.ContactManager.Entity.Contact;

import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService{

    private ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact getContactById(int contactId) {
        Optional<Contact> result = contactRepository.findById(contactId);
        Contact tempContact = null;
        if (result.isPresent()) {
            tempContact = result.get();
        } else {
            throw new RuntimeException("Couldn't find user with id = " + contactId);
        }
        return tempContact;
    }
}
