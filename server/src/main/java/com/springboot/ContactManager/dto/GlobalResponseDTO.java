package com.springboot.ContactManager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Generic response DTO for API responses
 * @param <T> Type of the data being returned in the response
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GlobalResponseDTO<T> {
    private T data;
    private String message;
    private int statusCode;

    /**
     * Creates a successful response with data and message
     * @param data The response data
     * @param message Success message
     * @param <T> Type of the data
     * @return GlobalResponseDTO with success status code 200
     */
    public static <T> GlobalResponseDTO<T> success(T data, String message) {
        GlobalResponseDTO<T> response = new GlobalResponseDTO<>();
        response.setData(data);
        response.setMessage(message);
        response.setStatusCode(200);
        return response;
    }

    /**
     * Creates a successful response with data (default success message)
     * @param data The response data
     * @param <T> Type of the data
     * @return GlobalResponseDTO with success status code 200
     */
    public static <T> GlobalResponseDTO<T> success(T data) {
        return success(data, "Operation completed successfully");
    }

    /**
     * Creates a failure response with error message and status code
     * @param errorMessage Error message
     * @param statusCode HTTP status code
     * @param <T> Type of the data
     * @return GlobalResponseDTO with specified status code
     */
    public static <T> GlobalResponseDTO<T> failure(String errorMessage, int statusCode) {
        GlobalResponseDTO<T> response = new GlobalResponseDTO<>();
        response.setData(null);
        response.setMessage(errorMessage);
        response.setStatusCode(statusCode);
        return response;
    }

    /**
     * Creates a failure response with error message (default status code 400)
     * @param errorMessage Error message
     * @param <T> Type of the data
     * @return GlobalResponseDTO with status code 400
     */
    public static <T> GlobalResponseDTO<T> failure(String errorMessage) {
        return failure(errorMessage, 400);
    }
}
