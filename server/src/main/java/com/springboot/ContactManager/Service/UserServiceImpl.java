package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Entity.User;
import com.springboot.ContactManager.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository theUserRepository) {
        this.userRepository = theUserRepository;
    }


    @Override
    @Transactional
    public User saveUser(User user) {

        User newUser = new User();
        if(user.getId() != 0) {
            newUser = userRepository.findById(user.getId()).get();
        }
        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setPhone(user.getPhone());
        newUser.setImage(user.getImage());
        newUser.setPassword(user.getPassword());
        newUser.setContacts(user.getContacts());

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
        if (result.isPresent()) {
            tempUser = result.get();
        } else {
            throw new RuntimeException("Couldn't find user with id = " + id);
        }
        return tempUser;
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User findByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    @Override
    @Transactional
    public void deleteUserById(int id) {
        userRepository.deleteById(id);
    }
}
