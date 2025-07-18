package com.springboot.ContactManager.config;

import com.springboot.ContactManager.Service.Impl.ParameterStoreService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;

@Configuration
@AllArgsConstructor
public class AwsCredentialsConfig {

    private final ParameterStoreService parameterStoreService;
    private final AwsIAMConfig awsIAMConfig;

    @Bean
    public AwsCredentialsProvider awsCredentialsProvider() {

        String accessKey = parameterStoreService.getParameterValue(awsIAMConfig.getAccessKey());
        String secretKey = parameterStoreService.getParameterValue(awsIAMConfig.getSecretKey());

        // Create and return credentials provider
        return StaticCredentialsProvider.create(
                AwsBasicCredentials.create(accessKey, secretKey)
        );
    }
}
