package eu.dariah.desir.trackb.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * This class is to modify the configuration of the Form handler in Spring
 */
@Configuration
public class FormConfiguration implements WebMvcConfigurer {
    /**
     * Setting the size of uploaded file to about 50MB
     * @return The MultiPartResolver knowing the size limit of the upload
     */
    @Bean
    public MultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(52428800);
        return multipartResolver;
    }
}
