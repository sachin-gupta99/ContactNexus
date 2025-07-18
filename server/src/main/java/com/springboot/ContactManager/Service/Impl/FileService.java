package com.springboot.ContactManager.Service.Impl;

import com.springboot.ContactManager.dto.ErrorDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.time.Duration;

@Service
@AllArgsConstructor
public class FileService {

    private final S3Client s3Client;
    private final S3Presigner s3Presigner;
    private final ParameterStoreService parameterStoreService;
    private final String bucketName;

    public ErrorDTO validateImage(MultipartFile file) {
        boolean isValid = file.getContentType() != null &&
                (file.getContentType().equals("image/jpeg") ||
                        file.getContentType().equals("image/png") ||
                        file.getContentType().equals("image/jpg"));
        if (!isValid) {
            return ErrorDTO.of("Invalid Image Format", "Only JPEG, JPG and PNG images are allowed!");
        }
        return null;
    }

    public String uploadImageToS3(String key, MultipartFile image, String type) throws IOException {
        if (type.equals("profile")) {
            key = "user-folder/" + key + "/profilePicture." +
                    (image.getContentType() != null ? image.getContentType().split("/")[1] : "jpg");
        } else {
            key = "user-folder/" + key + "/contact-folder/" + (image.getOriginalFilename() != null ? image.getOriginalFilename() : "file");
        }

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(image.getContentType())
                .acl(ObjectCannedACL.PUBLIC_READ)
                .build();

        s3Client.putObject(putObjectRequest,
                RequestBody.fromBytes(image.getBytes()));

        return key;
    }

    public String generateUrl(String key) {
        if (key == null || key.isEmpty()) {
            return "";
        }

        GetObjectPresignRequest getObjectPresignRequest = GetObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(60)) // 60 minutes URL expiry
                .getObjectRequest(b -> b
                        .bucket(bucketName)
                        .key(key)
                        .build())
                .build();

        PresignedGetObjectRequest presignedRequest = s3Presigner.presignGetObject(getObjectPresignRequest);
        return presignedRequest.url().toString();
    }
}
