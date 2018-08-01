package eu.dariah.desir.trackb.controller;

import java.io.File;
import java.security.InvalidParameterException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import eu.dariah.desir.trackb.json.JsonViews;
import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.BibSonomyAdaptor;
import eu.dariah.desir.trackb.service.MetadataExtractor;

/**
 * Created by hube on 8/1/2018.
 *
 * This controller manages the extraction of bibliographic data from json and pdf files and the storing in BibSonomy.
 */

@Controller
public class ExtractionController {

    private static final Logger LOG = LoggerFactory.getLogger(ExtractionController.class);
    private static final String ERROR_JSON = "{\"error\": true}";

    private final MetadataExtractor me;
    private final BibSonomyAdaptor adaptor;

    @Autowired
    public ExtractionController(MetadataExtractor me, BibSonomyAdaptor adaptor) {
        this.me = me;
        this.adaptor = adaptor;
    }

    /**
     * @param file
     * @return
     */
    @PostMapping(value="/store")
    public @ResponseBody String storeInBibSonomy(@RequestParam(value = "file", required = false) MultipartFile file) {
        List<YetAnotherBibliographicItem> items;

        try {
            if (file != null) {
                String fileName = file.getName();
                File json_file;
                try {
                    json_file = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                    file.transferTo(json_file);
                    LOG.info("Successfully uploaded " + fileName + " into " + json_file.getName());
                } catch (Exception e) {
                    LOG.error("Failed to upload " + fileName, e);
                    return ERROR_JSON;
                }
                try {
                    items = me.extractItems(json_file);
                    adaptor.storeItems(items);
                } catch(Exception e) {
                	LOG.error("Failed to extract items", e);
                    return ERROR_JSON;
                }
            } else {
            	LOG.error("Received empty file");
                return ERROR_JSON;
            }
        } catch (InvalidParameterException ipe) {
            LOG.error("Error with parameters: ", ipe);
            return ERROR_JSON;
        }

        return null;
    }


    /**
     * @param file
     * @param text
     * @return
     */
    @PostMapping(value="/extract", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
    public @ResponseBody String handleFileUpload(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "text", required = false) String text) {

        List<YetAnotherBibliographicItem> items;

        try {
            if (file == null && text == null) {
                throw new InvalidParameterException("The request does neither contain a file nor a text string. We need one or the other.");
            } else if (file != null && text != null) {
                throw new InvalidParameterException("The request does contain both a file and a text string. We only need one of them.");
            }
            if (file != null) {
                String fileName = file.getName();
                File jsonFile;
                try {
                    jsonFile = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                    file.transferTo(jsonFile);
                    LOG.info("Successfully uploaded " + fileName + " into " + jsonFile.getName());
                } catch (Exception e) {
                    LOG.error("Failed to upload " + fileName + " => " + e.getMessage());
                    return ERROR_JSON;
                }
                try {
                    items = me.extractItems(jsonFile);
                } catch(Exception e) {
                    return ERROR_JSON;
                }
            } else {
                try {
                    items = me.extractItems(text);
                } catch(Exception e) {
                    return ERROR_JSON;
                }
            }
        } catch (InvalidParameterException ipe) {
            LOG.error("Error with parameters: ", ipe);
            return ERROR_JSON;
        }

        if(items != null) {
            // converting bib items to json
            StringBuilder sb = new StringBuilder();
            for (YetAnotherBibliographicItem item : items) {
                final ObjectMapper mapper = new ObjectMapper();
                mapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);
                try {
                    final String result = mapper
                            .writerWithView(JsonViews.Public.class)
                            .writeValueAsString(item);
                    sb.append(result);
                } catch (JsonProcessingException e) {
                    LOG.error(e.toString());
                }
            }
            return sb.toString();
        }

        return null;
    }
}

