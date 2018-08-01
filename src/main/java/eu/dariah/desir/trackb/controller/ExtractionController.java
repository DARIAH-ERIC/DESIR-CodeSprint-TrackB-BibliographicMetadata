package eu.dariah.desir.trackb.controller;

import eu.dariah.desir.trackb.MetadataExtractor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * Created by hube on 8/1/2018.
 *
 * This controller manages the extraction of bibliographic data from json and pdf files
 */

@Controller
public class ExtractionController {

    private static final Logger LOG = LoggerFactory.getLogger(MetadataExtractor.class);

    @RequestMapping(value="/extract", method = {RequestMethod.POST, RequestMethod.GET})
    public @ResponseBody String handleFileUpload(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "text", required = false) String text) {
        if (!file.isEmpty()) {

            //handle file upload
            String file_name = file.getName();
            try {
                File json_file = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                file.transferTo(json_file);
                LOG.info("Successfully uploaded " + file_name + " into " + json_file.getName());
            } catch (Exception e) {
                LOG.error("Failed to upload " + file_name + " => " + e.getMessage());
            }

        } else {

            if (!text.isEmpty()) {

                //handle string

            } else {
                LOG.error("Missing input parameter");
                //TODO: throw exception
            }
        }
        return null;
    }
}

