package com.springboot.ContactManager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorClassDTO {

    private String message;
    private String details;

    public static ErrorClassDTO createError(String message, String details) {
        ErrorClassDTO error = new ErrorClassDTO();
        error.setMessage(message);
        error.setDetails(details);
        return error;
    }

}
