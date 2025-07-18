package com.springboot.ContactManager.config;

import com.springboot.ContactManager.Service.Impl.ParameterStoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3Configuration;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;

@Configuration
@RequiredArgsConstructor
public class AwsS3Config {

    private final ParameterStoreService parameterStoreService;
    private final AwsCredentialsProvider awsCredentialsProvider;

    @Value("${aws.s3.region}")
    private String s3RegionPath;

    @Value("${aws.s3.bucketName}")
    private String bucketName;

    @Bean
    public S3Client s3Client() {
        // Fetch S3 configuration from Parameter Store
        String s3Region = parameterStoreService.getParameterValue(s3RegionPath);

        return S3Client.builder()
                .region(Region.of(s3Region != null ? s3Region : "ap-south-1"))
                .credentialsProvider(awsCredentialsProvider)
                .serviceConfiguration(S3Configuration.builder()
                        .pathStyleAccessEnabled(true)
                        .build())
                .build();
    }

    @Bean
    public S3Presigner s3Presigner() {
        String s3Region = parameterStoreService.getParameterValue(s3RegionPath);

        return S3Presigner.builder()
                .region(Region.of(s3Region != null ? s3Region : "ap-south-1"))
                .credentialsProvider(awsCredentialsProvider)
                .build();
    }

    @Bean
    public String getS3BucketName() {
        return parameterStoreService.getParameterValue(bucketName);
    }
}
