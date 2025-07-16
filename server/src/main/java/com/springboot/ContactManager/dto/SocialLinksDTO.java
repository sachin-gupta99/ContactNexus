package com.springboot.ContactManager.dto;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for social media links with validation.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SocialLinksDTO {
    @Pattern(regexp = "^(https?://)?(www\\.)?(github\\.com/)?[a-zA-Z0-9-]+/?$", 
             message = "Invalid GitHub URL format. Example: https://github.com/username or username")
    private String github;

    @Pattern(regexp = "^(https?://)?(www\\.)?(linkedin\\.com/in/)?[a-zA-Z0-9-]+/?$", 
             message = "Invalid LinkedIn URL format. Example: https://linkedin.com/in/username or username")
    private String linkedin;

    @Pattern(regexp = "^(https?://)?(www\\.)?(instagram\\.com/)?[a-zA-Z0-9_.]+/?$", 
             message = "Invalid Instagram URL format. Example: https://instagram.com/username or username")
    private String instagram;
    
    /**
     * Gets the GitHub username from the URL if it's a full URL
     */
    public String getGithubUsername() {
        if (github == null || github.isEmpty()) {
            return "";
        }
        String[] parts = github.split("github.com/");
        return parts.length > 1 ? parts[1].replace("/", "") : github.replace("/", "");
    }
    
    /**
     * Gets the LinkedIn username from the URL if it's a full URL
     */
    public String getLinkedinUsername() {
        if (linkedin == null || linkedin.isEmpty()) {
            return "";
        }
        String[] parts = linkedin.split("linkedin\\.com/in/");
        return parts.length > 1 ? parts[1].replace("/", "") : linkedin.replace("/", "");
    }
    
    /**
     * Gets the Instagram username from the URL if it's a full URL
     */
    public String getInstagramUsername() {
        if (instagram == null || instagram.isEmpty()) {
            return "";
        }
        String[] parts = instagram.split("instagram\\.com/");
        return parts.length > 1 ? parts[1].replace("/", "") : instagram.replace("/", "");
    }
}
