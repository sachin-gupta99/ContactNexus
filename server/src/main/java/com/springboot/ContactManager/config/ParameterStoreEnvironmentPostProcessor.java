package com.springboot.ContactManager.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.env.ConfigurableEnvironment;
import software.amazon.awssdk.services.ssm.SsmClient;
import software.amazon.awssdk.services.ssm.model.GetParameterRequest;

public class ParameterStoreEnvironmentPostProcessor implements EnvironmentPostProcessor {

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        SsmClient ssmClient = SsmClient.create();

        String dbUrl = getParameter(ssmClient, "/ContactNexus/database/url");
        String dbUser = getParameter(ssmClient, "/ContactNexus/database/username");
        String dbPass = getParameter(ssmClient, "/ContactNexus/database/password");

        environment.getSystemProperties().put("spring.datasource.url", dbUrl);
        environment.getSystemProperties().put("spring.datasource.username", dbUser);
        environment.getSystemProperties().put("spring.datasource.password", dbPass);
    }

    private String getParameter(SsmClient ssmClient, String name) {
        System.out.println("Getting parameter: " + name);
        return ssmClient.getParameter(GetParameterRequest.builder().name(name).withDecryption(true).build())
                .parameter().value();
    }
}