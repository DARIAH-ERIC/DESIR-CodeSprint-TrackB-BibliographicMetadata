package eu.dariah.desir.trackb.controller;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.GrobidModelConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import eu.dariah.desir.trackb.service.MetadataExtractor;

import java.io.File;
import java.security.InvalidParameterException;
import java.util.List;

/**
 * Created by hube on 8/1/2018.
 *
 * This controller manages the extraction of bibliographic data from json and pdf files
 */

@Controller
public class ExtractionController {

    private static final Logger LOG = LoggerFactory.getLogger(ExtractionController.class);

    /**
     * @param file
     * @param text
     * @return
     */
    @PostMapping(value="/extract", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public @ResponseBody String handleFileUpload(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "text", required = false) String text) {

        GrobidModelConverter converter = new GrobidModelConverter();
        MetadataExtractor me = new MetadataExtractor(converter);
        me.init();
        List<YetAnotherBibliographicItem> bib_list;

        try {
            if (file == null && text == null) {

                throw new InvalidParameterException("The request does not contain a file nor a text string. We need one or " +
                        "the other.");
            } else if (file != null && text != null) {
                throw new InvalidParameterException("The request does contain both a file and a text string. We only need one or the other.");
            }
            if (file != null) {
                //handle file upload
                String file_name = file.getName();
                try {
                    File json_file = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                    file.transferTo(json_file);
                    LOG.info("Successfully uploaded " + file_name + " into " + json_file.getName());

                    //extract bibliographical data
                    bib_list = me.extractItems(json_file);

                } catch (Exception e) {
                    LOG.error("Failed to upload " + file_name + " => " + e.getMessage());
                }
            } else {
                //handle string

                //extract bibliographical data
                bib_list = me.extractItems(text);
            }
        } catch (InvalidParameterException ipe) {
            LOG.error("Error with parameters: ", ipe);
        }

        //TODO: convert bib_list to json and return json

        return "{}";
    }
}

