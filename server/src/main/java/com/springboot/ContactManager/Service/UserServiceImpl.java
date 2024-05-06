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
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User findUserByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    @Override
    @Transactional
    public void deleteUserById(int id) {
        userRepository.deleteById(id);
    }
}
