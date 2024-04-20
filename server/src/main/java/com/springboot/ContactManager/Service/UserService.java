package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Entity.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public List<User> findAllUsers();

    public User findUserById(int id);

    public User findByEmail(String email);

    public User findByPhone(String phone);

    public void deleteUserById(int id);
}
