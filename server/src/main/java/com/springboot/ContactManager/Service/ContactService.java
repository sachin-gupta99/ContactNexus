package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Entity.Contact;
import org.springframework.stereotype.Service;

public interface ContactService {

    public Contact getContactById(int contactId);
}
