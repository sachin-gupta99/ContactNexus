package com.springboot.ContactManager.dto;

import org.springframework.stereotype.Component;

@Component
public class ErrorClass {

    private String message;
    private String details;

    public ErrorClass() {
    }

    public ErrorClass(String message, String details) {
        this.message = message;
        this.details = details;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }
}
