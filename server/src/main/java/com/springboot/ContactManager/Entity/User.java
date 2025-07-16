package com.springboot.ContactManager.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users",
       indexes = @Index(columnList = "email", unique = true))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name cannot exceed 100 characters")
    @Column(nullable = false, length = 100)
    String name;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    @Column(nullable = false, unique = true, length = 100)
    String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    @Column(nullable = false)
    String password;

    @Size(max = 100, message = "Profession cannot exceed 100 characters")
    @Column(length = 100)
    String work;

    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    @Column(length = 15)
    String phone;

    @Size(max = 200, message = "Street address cannot exceed 200 characters")
    String street;

    @Size(max = 100, message = "Area/locality cannot exceed 100 characters")
    String area;

    @Size(max = 100, message = "City name cannot exceed 100 characters")
    String city;

    @Size(max = 100, message = "State name cannot exceed 100 characters")
    String state;

    @Pattern(regexp = "^[0-9]{6}$", message = "Pincode must be 6 digits")
    @Column(length = 6)
    String pincode;

    @Size(max = 255, message = "GitHub URL cannot exceed 255 characters")
    String github;

    @Size(max = 255, message = "LinkedIn URL cannot exceed 255 characters")
    String linkedin;

    @Size(max = 255, message = "Instagram URL cannot exceed 255 characters")
    String instagram;

    @Size(max = 200, message = "Likes cannot exceed 200 characters")
    String likes;

    @Size(max = 100, message = "Movie name cannot exceed 100 characters")
    String movie;

    @Size(max = 200, message = "Interests cannot exceed 200 characters")
    String interests;

    @Size(max = 255, message = "Image URL cannot exceed 255 characters")
    String image;

    @Size(max = 100, message = "Bio heading cannot exceed 100 characters")
    String bioHeading;

    @Size(max = 500, message = "Bio description cannot exceed 500 characters")
    String bioDescription;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    LocalDateTime updatedAt;

//    @OneToMany(
//        mappedBy = "user",
//        cascade = CascadeType.ALL,
//        orphanRemoval = true
////        fetch = FetchType.LAZY
//    )
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonManagedReference
    @Builder.Default
    List<Contact> contacts = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
