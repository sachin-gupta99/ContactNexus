package com.springboot.ContactManager.Exceptions;

import com.springboot.ContactManager.dto.ErrorClassDTO;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity handleSecurityException(Exception exception) {
        ErrorClassDTO error = null;

        if (exception instanceof BadCredentialsException) {
            error = ErrorClassDTO.createError("Bad Credentials", "The username or password is incorrect");
            return ResponseEntity.status(401).body(error);
        }

        else if (exception instanceof AccountStatusException) {
            error = ErrorClassDTO.createError("Account Status Exception", "The account is locked or disabled");
            return ResponseEntity.status(401).body(error);
        }

        else if (exception instanceof AccessDeniedException) {
            error = ErrorClassDTO.createError("Access Denied", "You do not have permission to access this resource");
            return ResponseEntity.status(403).body(error);
        }

        else if (exception instanceof SignatureException) {
            error = ErrorClassDTO.createError("Signature Exception", "The JWT token signature is invalid");
            return ResponseEntity.status(401).body(error);
        }

        else if (exception instanceof ExpiredJwtException) {
            error = ErrorClassDTO.createError("Expired JWT", "The JWT token has expired");
            return ResponseEntity.status(401).body(error);
        }

        else
            error = ErrorClassDTO.createError("Internal Server Error", "An internal server error occurred");

        return ResponseEntity.status(401).body(error);
    }
}
