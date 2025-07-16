package com.springboot.ContactManager.Service.Impl;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Repository.UserRepository;
import com.springboot.ContactManager.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public User saveUser(User user) {

        User newUser = userRepository.findById(user.getId()).get();
        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setPhone(user.getPhone());
        newUser.setPassword(user.getPassword());

        newUser.setStreet(user.getStreet());
        newUser.setArea(user.getArea());
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
        newUser.setBioHeading(user.getBioHeading());
        newUser.setBioDescription(user.getBioDescription());

        userRepository.save(newUser);
        return newUser;
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserById(int id) {
        Optional<User> result = userRepository.findById(id);
        User tempUser = null;
        if (result.isPresent())
            tempUser = result.get();
        else
            throw new RuntimeException("Couldn't find user with id = " + id);

        return tempUser;
    }

    @Override
    public User findUserByEmail(String email) {
        User user = userRepository.findByEmail(email);

        if (user == null)
            throw new RuntimeException("Couldn't find user with email = " + email);

        return user;
    }

    @Override
    public User findUserByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    @Override
    @Transactional
    public void deleteUserById(int id) {

        User user = this.findUserById(id);

        if (user == null)
            throw new RuntimeException("Couldn't find user with id = " + id);

        List<Contact> contacts = user.getContacts();

        if (contacts != null) {
            for (Contact contact : contacts) {
                contact.setUser(null);
            }
        }

        this.userRepository.deleteById(id);
    }

    @Override
    public Contact addContact(Contact contact, int id) {
        User user = this.findUserById(id);
        contact.setUser(user);

        List<Contact> contacts = user.getContacts();

        if (contacts == null) {
            contacts = new ArrayList<>();
        }

        contacts.add(contact);
        user.setContacts(contacts);

        this.saveUser(user);

        return contact;
    }
}
