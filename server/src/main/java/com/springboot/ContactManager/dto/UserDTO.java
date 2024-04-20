package com.springboot.ContactManager.dto;

import com.springboot.ContactManager.Entity.Contact;
import com.springboot.ContactManager.Entity.User;

import java.util.ArrayList;
import java.util.List;

public class UserDTO {

    private String name, email, password, phone, work, street, area, city, state, pincode, github, linkedin, instagram, likes, movie, interests, bio_heading, bio_desc;

    public UserDTO() {
    }

    public UserDTO(String name, String email, String password, String phone, String work, String street, String area, String city, String state, String pincode, String github, String linkedin, String instagram, String likes, String movie, String interests, String bio_heading, String bio_desc) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.work = work;
        this.street = street;
        this.area = area;
        this.city = city;
        this.state = state;
        this.street = street;
        this.pincode = pincode;
        this.github = github;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.likes = likes;
        this.movie = movie;
        this.interests = interests;
        this.bio_heading = bio_heading;
        this.bio_desc = bio_desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getBio_heading() {
        return bio_heading;
    }

    public void setBio_heading(String bio_heading) {
        this.bio_heading = bio_heading;
    }

    public String getBio_desc() {
        return bio_desc;
    }

    public void setBio_desc(String bio_desc) {
        this.bio_desc = bio_desc;
    }

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

    @Override
    public String toString() {
        return "UserDTO{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", work='" + work + '\'' +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", pin code='" + pincode + '\'' +
                ", github='" + github + '\'' +
                ", linkedin='" + linkedin + '\'' +
                ", instagram='" + instagram + '\'' +
                ", likes='" + likes + '\'' +
                ", movie='" + movie + '\'' +
                ", interests='" + interests + '\'' +
                ", bio_heading='" + bio_heading + '\'' +
                ", bio_desc='" + bio_desc + '\'' +
                '}';
    }
}
