package com.springboot.ContactManager.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "work")
    private String work;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "github")
    private String github;

    @Column(name = "linkedin")
    private String linkedin;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "likes")
    private String likes;

    @Column(name = "movie")
    private String movie;

    @Column(name = "interests")
    private String interests;

    @Column(name = "image")
    private String image;

    @Column(name = "bio_heading")
    private String bio_heading;

    @Column(name = "bio_desc")
    private String bio_desc;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonManagedReference
    private List<Contact> contacts = new ArrayList<>();

    public User() {
    }

    public User(int id, String name, String email, String password, String work, String phone, String address, String city, String state, String pincode, String github, String linkedin, String instagram, String likes, String movie, String interests, String image, String bio_heading, String bio_desc, List<Contact> contacts) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.work = work;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.github = github;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.likes = likes;
        this.movie = movie;
        this.interests = interests;
        this.image = image;
        this.bio_heading = bio_heading;
        this.bio_desc = bio_desc;
        this.contacts = contacts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", pincode='" + pincode + '\'' +
                ", github='" + github + '\'' +
                ", linkedin='" + linkedin + '\'' +
                ", instagram='" + instagram + '\'' +
                ", likes='" + likes + '\'' +
                ", movie='" + movie + '\'' +
                ", interests='" + interests + '\'' +
                ", image='" + image + '\'' +
                ", bio_heading='" + bio_heading + '\'' +
                ", bio_desc='" + bio_desc + '\'' +
                ", contacts=" + contacts +
                '}';
    }
}
