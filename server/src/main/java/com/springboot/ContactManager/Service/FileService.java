package com.springboot.ContactManager.Service;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.springboot.ContactManager.dto.ErrorClassDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.Calendar;
import java.util.Date;

@Service
public class FileService {

    private AmazonS3 amazonS3;
    @Value("${aws.s3.bucketName}")
    private String bucketName;

    @Autowired
    public FileService(AmazonS3 amazonS3) {
        this.amazonS3 = amazonS3;
    }

    public ErrorClassDTO validateImage(MultipartFile file) {
        boolean isValid = file.getContentType().equals("image/jpeg") || file.getContentType().equals("image/png") || file.getContentType().equals("image/jpg");
        if (!isValid) {
            return ErrorClassDTO.createError("Invalid Image Format", "Only JPEG, JPG and PNG images are allowed!");
        }

        return null;
    }

    public String uploadImageToS3(String key, MultipartFile image, String type) throws IOException {
        File modifiedFile = new File(image.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(modifiedFile);
        fos.write(image.getBytes());

        if (type == "profile")
            key = "user-folder/" + key + "/profilePicture." + image.getContentType().split("/")[1];
        else
            key += "/contact-folder/" + image.getOriginalFilename();

        amazonS3.putObject(new PutObjectRequest(bucketName, key, modifiedFile)
                .withMetadata(new ObjectMetadata()));

        modifiedFile.delete();
        return key;
    }

    public String generateUrl(String key, HttpMethod httpMethod) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.MINUTE, 1);
        URL url = amazonS3.generatePresignedUrl(bucketName, key, cal.getTime(), httpMethod);
        return url.toString();
    }
}
