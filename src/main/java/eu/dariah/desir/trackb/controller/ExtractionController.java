package eu.dariah.desir.trackb.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dariah.desir.trackb.json.JsonViews;
import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.BibSonomyAdaptor;
import eu.dariah.desir.trackb.service.BibSonomyModelConverter;
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
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by hube on 8/1/2018.
 *
 * This controller manages the extraction of bibliographic data from json and pdf files and the storing in BibSonomy.
 */

@Controller
public class ExtractionController {

    private static final Logger LOG = LoggerFactory.getLogger(ExtractionController.class);
    private static final String ERROR_JSON = "{\"error\": true}";

    /**
     * @param file
     * @return
     */
    @PostMapping(value="/store")
    public @ResponseBody String storeInBibSonomy(
            @RequestParam(value = "file", required = false) MultipartFile file) {

        GrobidModelConverter converter = new GrobidModelConverter();
        MetadataExtractor me = new MetadataExtractor(converter);
        List<YetAnotherBibliographicItem> bib_list;
        BibSonomyModelConverter bs_converter = new BibSonomyModelConverter();
        BibSonomyAdaptor adaptor = new BibSonomyAdaptor(bs_converter);
        Set<String> tags = new HashSet<>(); // ?

        try {
            if (file != null) {
                String fileName = file.getName();
                File json_file;
                try {
                    json_file = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                    file.transferTo(json_file);
                    LOG.info("Successfully uploaded " + fileName + " into " + json_file.getName());
                } catch (Exception e) {
                    LOG.error("Failed to upload " + fileName + " => " + e.getMessage());
                    return ERROR_JSON;
                }
                try {
                    bib_list = me.extractItems(json_file);
                    adaptor.storeItems(bib_list, tags);
                } catch(Exception e) {
                    return ERROR_JSON;
                }
            } else {
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

        GrobidModelConverter converter = new GrobidModelConverter();
        MetadataExtractor me = new MetadataExtractor(converter);
        List<YetAnotherBibliographicItem> bib_list;

        try {
            if (file == null && text == null) {
                throw new InvalidParameterException("The request does not contain a file nor a text string. We need one or " +
                        "the other.");
            } else if (file != null && text != null) {
                throw new InvalidParameterException("The request does contain both a file and a text string. We only need one or the other.");
            }
            if (file != null) {
                String fileName = file.getName();
                File json_file;
                try {
                    json_file = new File(System.getProperty("java.io.tmpdir") + "/" + file.getName());
                    file.transferTo(json_file);
                    LOG.info("Successfully uploaded " + fileName + " into " + json_file.getName());
                } catch (Exception e) {
                    LOG.error("Failed to upload " + fileName + " => " + e.getMessage());
                    return ERROR_JSON;
                }
                try {
                    bib_list = me.extractItems(json_file);
                } catch(Exception e) {
                    return ERROR_JSON;
                }
            } else {
                try {
                    bib_list = me.extractItems(text);
                } catch(Exception e) {
                    return ERROR_JSON;
                }
            }
        } catch (InvalidParameterException ipe) {
            LOG.error("Error with parameters: ", ipe);
            return ERROR_JSON;
        }

        if(bib_list != null) {
            // converting bib items to json
            StringBuilder sb = new StringBuilder();
            for (YetAnotherBibliographicItem item : bib_list) {
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

