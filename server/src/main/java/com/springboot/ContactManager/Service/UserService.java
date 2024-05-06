package com.springboot.ContactManager.Service;

import com.springboot.ContactManager.Entity.User;
import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public List<User> findAllUsers();

    public User findUserById(int id);

    public User findUserByEmail(String email);

    public User findUserByPhone(String phone);

    public void deleteUserById(int id);
}
