package com.springboot.ContactManager.Exceptions;

import com.springboot.ContactManager.dto.ErrorDTO;
import com.springboot.ContactManager.dto.GlobalResponseDTO;
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
    public ResponseEntity<?> handleSecurityException(Exception exception) {
        ErrorDTO error = null;

        switch (exception) {
            case BadCredentialsException badCredentialsException -> {
                error = ErrorDTO.of("Bad Credentials", "The username or password is incorrect");
                return ResponseEntity.status(401).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 401));
            }
            case AccountStatusException accountStatusException -> {
                error = ErrorDTO.of("Account Status Exception", "The account is locked or disabled");
                return ResponseEntity.status(401).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 401));
            }
            case AccessDeniedException accessDeniedException -> {
                error = ErrorDTO.of("Access Denied", "You do not have permission to access this resource");
                return ResponseEntity.status(403).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 403));
            }
            case SignatureException signatureException -> {
                error = ErrorDTO.of("Signature Exception", "The JWT token signature is invalid");
                return ResponseEntity.status(401).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 401));
            }
            case ExpiredJwtException expiredJwtException -> {
                error = ErrorDTO.of("Expired JWT", "The JWT token has expired");
                return ResponseEntity.status(401).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 401));
            }
            case IllegalArgumentException illegalArgumentException -> {
                error = ErrorDTO.of("Bad Request", "The request is invalid");
                return ResponseEntity.status(400).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 400));
            }
            case null, default -> error = ErrorDTO.of("Internal Server Error", exception.getMessage());
        }

        return ResponseEntity.status(500).body(GlobalResponseDTO.failure(error.getMessage() + " : " + error.getDescription(), 500));
    }
}
