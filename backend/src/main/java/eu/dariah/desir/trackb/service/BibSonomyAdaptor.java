package eu.dariah.desir.trackb.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.bibsonomy.model.Post;
import org.bibsonomy.model.Resource;
import org.bibsonomy.model.logic.LogicInterface;
import org.bibsonomy.rest.client.RestLogicFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * Facilitates interaction with the BibSonomy REST API.
 *
 * @author rja
 */
@Service
public class BibSonomyAdaptor {

	@Value("${bibsonomy.api.user}")
	private String bibsonomyApiUser;

	@Value("${bibsonomy.api.key}")
	private String bibsonomyApiKey;

	@Value("${bibsonomy.api.url}")
	private String bibsonomyApiUrl;

	private LogicInterface bibsonomy;

	private BibSonomyModelConverter converter;


	/**
	 * @param converter
	 */
	@Autowired
	public BibSonomyAdaptor(BibSonomyModelConverter converter) {
		this.converter = converter;
	}


	/**
	 * Initialise BibSonomy REST API
	 */
	@PostConstruct
	public void init() {
	    if (bibsonomyApiUser.isEmpty() || bibsonomyApiKey.isEmpty()){
	        bibsonomy = null;
        } else {
            final RestLogicFactory rlf = new RestLogicFactory(this.bibsonomyApiUrl);
            this.bibsonomy = rlf.getLogicAccess(this.bibsonomyApiUser, this.bibsonomyApiKey);
        }
	}


	/**
	 * Store items in BibSonomy.
	 *
	 * @param items
	 * @return The hashes (identifiers) of the created items.
	 */
	public List<String> storeItems(final List<YetAnotherBibliographicItem> items) throws NullPointerException {
        if (bibsonomy == null) {
            throw new NullPointerException("BibSonomy is not initialized ! Check your username/password in the " +
                    "properties file.");
        }
        // convert model
        final List<Post<? extends Resource>> posts = converter.convertToPosts(items, this.bibsonomyApiUser);
        // call API
        final List<String> hashs = bibsonomy.createPosts(posts);
        return hashs;
	}


    /**
     * Delete Items in BibSonomy.
     *
     * @param hashs
     */
    public void deleteItems(List<String> hashs) {

        if (bibsonomy != null){
            // call API
            bibsonomy.deletePosts(bibsonomyApiUser, hashs);
        }
    }


}
