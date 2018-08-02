package eu.dariah.desir.trackb.service;

import java.io.File;
import java.util.List;

import javax.annotation.PostConstruct;

import eu.dariah.desir.trackb.service.impl.LocalGrobidMetadataExtractor;
import eu.dariah.desir.trackb.service.impl.RemoteGrobidMetadataExtractor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * Extracts bibliographic metadata given a file or string using Grobid.
 *
 * @author rja
 */
@Service
public class MetadataExtractor {

	@Value("${grobid.home.path}")
	private String grobidHome;

	@Value("${grobid.server.url}")
	private String grobidUrl;

	private GrobidMetadataExtractor extractor;
	private GrobidModelConverter converter;

	/**
	 * @param converter
	 * @throws Exception
	 */
	@Autowired
	public MetadataExtractor(GrobidModelConverter converter) {
		this.converter = converter;
	}

	@PostConstruct
	public void init() throws Exception {
		if (grobidHome != null) {
			this.extractor = new LocalGrobidMetadataExtractor(this.grobidHome, converter);
		} else if (grobidUrl != null) {
			this.extractor = new RemoteGrobidMetadataExtractor(this.grobidUrl, converter);
		} else {
			throw new RuntimeException("Could not initialise " + MetadataExtractor.class.getSimpleName() + " since " +
                    "neither grobid path nor grobid url were configured.");
		}
	}

	/**
	 * Extracts bibliographic references from the given file.
	 *
	 * @param file A file (PDF) containing bibliographic references
	 * @return the list of bibliographic references
	 */
	public List<YetAnotherBibliographicItem> extractItems(final File file) throws Exception {
		return extractor.extractItems(file);
	}

	/**
	 * Extract bibliographic items (separated by newline) from the string.
	 *
	 * We assume that individual bibliographic items are separated by newline.
	 *
	 * @param text The String that the user will write in the application, should contain bibliographical references
	 * @return the extracted bibliographic items
	 */
	public List<YetAnotherBibliographicItem> extractItems(final String text) {
		return extractor.extractItems(text);
	}

}
