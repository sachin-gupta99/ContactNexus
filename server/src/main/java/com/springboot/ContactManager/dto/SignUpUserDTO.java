package com.springboot.ContactManager.dto;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignUpUserDTO {

    private String name, email, password, phone, work, street, area, city, state, pincode, github, linkedin, instagram, likes, movie, interests, bio_heading, bio_desc;

    public User toUser(String image) {
        User user = new User();
        user.setName(this.name);
        user.setEmail(this.email);
        user.setPassword(this.password);
        user.setPhone(this.phone);
        user.setWork(this.work);
        user.setAddress(this.street + ", " + this.area);
        user.setCity(this.city);
        user.setState(this.state);
        user.setPincode(this.pincode);
        user.setGithub(this.github);
        user.setLinkedin(this.linkedin);
        user.setInstagram(this.instagram);
        user.setLikes(this.likes);
        user.setMovie(this.movie);
        user.setInterests(this.interests);
        user.setImage(image);
        user.setBio_heading(this.bio_heading);
        user.setBio_desc(this.bio_desc);
        List<Contact> contacts = new ArrayList<>();
        user.setContacts(contacts);
        return user;
    }
}
