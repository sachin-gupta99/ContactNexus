package com.springboot.ContactManager.Exceptions;

import com.springboot.ContactManager.dto.ErrorClassDTO;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ErrorClassDTO handleSecurityException(Exception exception) {
        ErrorClassDTO error = null;

        if (exception instanceof BadCredentialsException)
            error = ErrorClassDTO.createError("Bad Credentials", "The username or password is incorrect");

        else if (exception instanceof AccountStatusException)
            error = ErrorClassDTO.createError("Account Status Exception", "The account is locked or disabled");

        else if (exception instanceof AccessDeniedException)
            error = ErrorClassDTO.createError("Access Denied", "You do not have permission to access this resource");

        else if (exception instanceof SignatureException)
            error = ErrorClassDTO.createError("Signature Exception", "The JWT token signature is invalid");

        else if (exception instanceof ExpiredJwtException)
            error = ErrorClassDTO.createError("Expired JWT", "The JWT token has expired");

        else
            error = ErrorClassDTO.createError("Internal Server Error", "An internal server error occurred");

        return error;
    }
}