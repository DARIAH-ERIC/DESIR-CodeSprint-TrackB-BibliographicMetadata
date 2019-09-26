package eu.dariah.desir.trackb.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.security.InvalidParameterException;
import java.util.List;
import org.apache.commons.lang3.StringUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import eu.dariah.desir.trackb.json.JsonHelper;
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
	private static final String SUCCESSFUL_JSON = "{\"error\": false}";

	private final MetadataExtractor me;
	private final BibSonomyAdaptor adaptor;

	/**
	 * Initialize the controller with a metadata extractor for Grobid and a connector for BibSonomy.
	 * @param me
	 * @param adaptor
	 */
	@Autowired
	public ExtractionController(MetadataExtractor me, BibSonomyAdaptor adaptor) {
		this.me = me;
		this.adaptor = adaptor;
	}

	/**
	 * @param entries The wrapper of all YetAnotherBibliographicItems retrieved from the frontend
	 * @return The JSON string we send back to the frontend, either error is true or false
	 */
    @PostMapping(value="/store", produces=MediaType.APPLICATION_JSON_UTF8_VALUE) //consumes=MediaType.APPLICATION_JSON_UTF8_VALUE,
    @ResponseBody
    public String storeInBibSonomy(@RequestHeader(value="user") String user,
                                   @RequestHeader(value="key") String key,
                                   @RequestBody String entries) {

        try {
            LOG.debug("entries: " + entries);
            LOG.debug("user: " + user);
            LOG.debug("key: " + key);

            List<String> result = null;
            if (user.equals("null") || key.equals("null")){
                LOG.debug("use user and key information from properties file");
                result = adaptor.storeItems(JsonHelper.convert(entries));
            } else{
                LOG.debug("use user and key information from login");
                result = adaptor.storeItems(JsonHelper.convert(entries), user, key);
            }
            LOG.debug("stored " + result.size() + " items in BibSonomy");

            //check if BibSonomy accepted all items
            int itemsCountWrapper = StringUtils.countMatches("entryType", entries);
            int failedUploads = itemsCountWrapper - result.size();

            LOG.debug("itemsCountWrapper: " + itemsCountWrapper);
            //LOG.debug("failed to save " + failedUploads + " items to BibSonomy.");

            if (failedUploads > 0){
                LOG.error("BibSonomy did not accept " + failedUploads + " out of " + itemsCountWrapper + " items.");
                return getJsonError("BibSonomy did not accept " + failedUploads + " out of " + itemsCountWrapper + " items.");
            }

            return SUCCESSFUL_JSON;
        } catch(Exception e) {
            LOG.error("Failed to extract items", e);
	        return getJsonError("Failed to extract items" + e);
        }
    }

	/**
	 * @param file The File we want to store and extract the metadata from, received from the frontend
	 * @param text The text String we want to extract the metadata from, received from the frontend
	 * @return The JSON we send back to the frontend, either error is true, or the JSON of items
	 */
	@PostMapping(value="/extract", produces = {MediaType.APPLICATION_JSON_UTF8_VALUE})
	public @ResponseBody String handleFileUpload(
			@RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam(value = "text", required = false) String text) {

        LOG.debug(file==null?"File is null":"File is not null");
        LOG.debug(text==null?"Text is null":"Text is not null");

		final List<YetAnotherBibliographicItem> items;

		try {
			// sanity checks for parameters
			if (file == null && text == null) {
				throw new InvalidParameterException("The request does neither contain a file nor a text string. We need one or the other.");
			} else if (file != null && text != null) {
				throw new InvalidParameterException("The request does contain both a file and a text string. We only need one of them.");
			}

			// handle file or text
			if (file != null) {
				final String fileName = file.getOriginalFilename();
                final File jsonFile;

				LOG.debug("fileName: " + fileName);

				// check if pdf or txt file
                if (fileName.contains(".pdf")) {
                    LOG.debug("identified pdf file");
                    try {
                        //tomcat
                        jsonFile = new File(System.getProperty("java.io.tmpdir") + "/" + fileName);
                        file.transferTo(jsonFile);

                        LOG.info("Successfully uploaded " + fileName + " into " + jsonFile.getAbsolutePath());
                    } catch (Exception e) {
                        LOG.error("Failed to upload " + fileName + " => " + e.getMessage());
                        return getJsonError("Failed to upload " + fileName + " => " + e.getMessage());
                    }
                    try {
                        items = me.extractItems(jsonFile);
                    } catch (Exception e) {
                        return getJsonError("exception " + e + " while extracting items");
                    }
                } else{
                    // read text file
                    LOG.debug("identified text file");
                    String content = "";
                    try {
                        content = new String(file.getBytes());
                    } catch(Exception e){
                        return getJsonError("exception " + e + " while extracting items");
                    }

                    try {
                        items = me.extractItems(content);
                    } catch(Exception e) {
                        return getJsonError("exception " + e + " while extracting items");
                    }
                }
			} else {
				try {
					items = me.extractItems(text);
				} catch(Exception e) {
				    return getJsonError("exception " + e + " while extracting items");
				}
			}

			if (items == null) {
				LOG.error("Could not extract any items");
				return getJsonError("items == null after extraction");
			}
			return toJson(items);

		} catch (InvalidParameterException ipe) {
			LOG.error("Error with parameters: ", ipe);
			return getJsonError("problem with parameters");
		}
	}


    private static String getJsonError(final String msg) {
	    // FIXME: add proper escaping...
        return "{'error': true, 'message': '" + msg + "'}";


    }

	/**
	 * Convert bibliographic items to JSON
	 *
	 * @param items A list of YetAnotherBibliographicItem items
	 * @return A String as a JSON Array of the YetAnotherBibliographicItem items
	 */
	private static String toJson(List<YetAnotherBibliographicItem> items) {
		final StringBuilder sb = new StringBuilder();

		final ObjectMapper mapper = new ObjectMapper();
		mapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);
		try {
			sb.append(mapper.writerWithView(JsonViews.Public.class).writeValueAsString(items));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			LOG.error("TODO", e);
		}

		return sb.toString();
	}
}

