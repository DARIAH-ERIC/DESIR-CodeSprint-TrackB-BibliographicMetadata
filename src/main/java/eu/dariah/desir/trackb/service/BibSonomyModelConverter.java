package eu.dariah.desir.trackb.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.bibsonomy.model.BibTex;
import org.bibsonomy.model.Post;
import org.bibsonomy.model.Resource;
import org.bibsonomy.model.Tag;
import org.bibsonomy.model.User;
import org.bibsonomy.model.util.PersonNameParser.PersonListParserException;
import org.bibsonomy.model.util.PersonNameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * Converts {@link YetAnotherBibliographicItem} to {@link BibTex}.
 *
 * @author rja
 */
@Service
public class BibSonomyModelConverter {

	private static final Logger LOG = LoggerFactory.getLogger(BibSonomyModelConverter.class);

	
	/**
	 * Creates a post for the given data.
	 * 
	 * @param item
	 * @param userName
	 * @param tags
	 * @return The complete post
	 */
	public Post<BibTex> convertToPost(final YetAnotherBibliographicItem item, final String userName, final List<String> tags) {
		final Post<BibTex> post = new Post<BibTex>();
		post.setResource(convertToBibTex(item));
		post.setUser(new User(userName));
		post.setTags(convertToTags(tags));
		return post;
	}
	

	/**
	 * Creates a list of posts for the given data.
	 * 
	 * @param items
	 * @param userName
	 * @param tags
	 * @return
	 */
	public List<Post<? extends Resource>> convertToPosts(final List<YetAnotherBibliographicItem> items, final String userName, final List<String> tags) {
		final List<Post<? extends Resource>> posts = new ArrayList<Post<? extends Resource>>(items.size());
		for (final YetAnotherBibliographicItem item: items) {
			posts.add(convertToPost(item, userName, tags));

		}
		return posts;
	}
	
	/**
	 * Converts a list of strings into a list of tags. Removes whitespace within individual tags.
	 * 
	 * @param tags
	 * @return The list of tags.
	 */
	public Set<Tag> convertToTags(final List<String> tags) {
		final Set<Tag> result = new HashSet<Tag>(tags.size());
		for (final String tag: tags) {
			result.add(new Tag(tag.replaceAll("\\s", "")));
		}
		return result;
	}
	
	/**
	 * Converts {@link YetAnotherBibliographicItem} to {@link BibTex}.
	 * 
	 * @param item
	 * @return
	 */
	public BibTex convertToBibTex(final YetAnotherBibliographicItem item) {
		final BibTex bib = new BibTex();

		bib.setEntrytype(item.getEntryType());
		bib.setAddress(item.getAddress());
		bib.setBooktitle(item.getBooktitle());
		bib.setChapter(item.getChapter());
		bib.setEdition(item.getEdition());
		bib.setInstitution(item.getInstitution());
		bib.setJournal(item.getJournal());
		bib.setNumber(item.getNumber());
		bib.setPages(item.getPages());
		bib.setPublisher(item.getPublisher());
		bib.setSeries(item.getSeries());
		bib.setTitle(item.getTitle());
		bib.setVolume(item.getVolume());
		bib.setDay(item.getDay());
		bib.setMonth(item.getMonth());
		bib.setYear(item.getYear());
		
		try {
			bib.setAuthor(PersonNameUtils.discoverPersonNames(item.getAuthors()));
		} catch (PersonListParserException e) {
			LOG.warn("could not parse author names from ", item.getAuthors());
		}
		try {
			bib.setEditor(PersonNameUtils.discoverPersonNames(item.getEditors()));
		} catch (PersonListParserException e) {
			LOG.warn("could not parse author names from ", item.getEditors());
		}

		final Map<String, String> miscFields = new HashMap<String, String>();
		miscFields.put("doi", item.getDoi());
		bib.setMiscFields(miscFields);

		return bib;
	}

}
