package com.springboot.ContactManager.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for user biography information.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BioDTO {
    @NotBlank(message = "Bio heading is required")
    @Size(max = 200, message = "Bio heading cannot exceed 200 characters")
    private String heading;
    
    @NotBlank(message = "Bio description is required")
    @Size(max = 1000, message = "Bio description cannot exceed 1000 characters")
    private String description;
}
