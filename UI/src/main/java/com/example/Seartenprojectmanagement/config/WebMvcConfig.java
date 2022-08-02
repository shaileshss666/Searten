package com.example.Seartenprojectmanagement.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * Created by Administrator on 2019/2/18.
 */
@SpringBootConfiguration
public class WebMvcConfig extends WebMvcConfigurationSupport {

    @Value("${upload.picture.path}")
    private String fileUpload;



    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/favicon.ico").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/view/**").addResourceLocations("classpath:/view/");
        registry.addResourceHandler("/temp/**").addResourceLocations("file:" + fileUpload);
        super.addResourceHandlers(registry);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        super.addInterceptors(registry);
    }

}
