package eu.dariah.desir.trackb.service;

import java.io.File;
import java.util.*;

import javax.annotation.PostConstruct;

import org.grobid.core.data.BibDataSet;
import org.grobid.core.data.BiblioItem;
import org.grobid.core.engines.Engine;
import org.grobid.core.factory.GrobidFactory;
import org.grobid.core.main.GrobidHomeFinder;
import org.grobid.core.utilities.GrobidProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

	private static final Logger LOG = LoggerFactory.getLogger(MetadataExtractor.class);

	@Value("${grobid.home.path}")
	private String grobidHome;

	@Value("${grobid.server.url}")
	private String grobidUrl;

	private final GrobidModelConverter converter;
	private Engine engine;

	@Autowired
	public MetadataExtractor(GrobidModelConverter converter) {
		this.converter = converter;
	}

	/**
	 * Initialize GROBID
	 */
	@PostConstruct
	public void init() {

		// The GrobidHomeFinder can be instantiate without parameters to verify the grobid home in the standard
		// location (classpath, ../grobid-home, ../../grobid-home)

		// If the location is customized:
		LOG.debug("instantiating GROBID home finder with " + this.grobidHome);
		final GrobidHomeFinder grobidHomeFinder = new GrobidHomeFinder(Collections.singletonList(this.grobidHome));

		//The GrobidProperties needs to be instantiate using the correct grobidHomeFinder or it will use the default 
		//locations
		GrobidProperties.getInstance(grobidHomeFinder);

		LOG.debug("instantiating grobid by searching in the following locations: " + GrobidProperties.get_GROBID_HOME_PATH());

		this.engine = GrobidFactory.getInstance().createEngine();

		LOG.debug("Loading the GROBID parsers");
		this.engine.getParsers().getFullTextParser();
		this.engine.getParsers().getAffiliationAddressParser();
		this.engine.getParsers().getHeaderParser();
		this.engine.getParsers().getCitationParser();
		this.engine.getParsers().getReferenceSegmenterParser();
		this.engine.getParsers().getSegmentationParser();
		this.engine.getParsers().getDateParser();
		this.engine.getParsers().getAuthorParser();
	}

	/**
	 * Extracts bibliographic references from the given file.
	 * 
	 * @param file A file (PDF) containing bibliographic references
	 * @return the list of bibliographic references
	 */
	public List<YetAnotherBibliographicItem> extractItems(final File file) throws Exception {
		try {
			LOG.debug("extracting items from file " + file);
			final List<BibDataSet> items = this.engine.processReferences(file, false);

			LOG.debug("extracted " + items.size() + " items from file");
			
			// copy BiblioItems into new list
			final List<YetAnotherBibliographicItem> result = new ArrayList<YetAnotherBibliographicItem>(items.size());
			for (final BibDataSet bibDataSet : items) {
				result.add(this.converter.convert(bibDataSet.getResBib()));
			}

			return result;
		} catch(Exception e) {
			LOG.error("We couldn't extract items from the file " + file.getAbsolutePath(), e);
			throw e;
		}
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
		try {
			final List<YetAnotherBibliographicItem> result = new LinkedList<YetAnotherBibliographicItem>();

			// iterate over the lines
			for (final String line : text.split("\\r?\\n")) {
				final BiblioItem item = this.engine.processRawReference(text, true);
				if (item != null) {
					result.add(this.converter.convert(item));

					if (LOG.isDebugEnabled())
						LOG.debug("input:  " + line);
					LOG.debug("output: " + item.toBibTeX());
				}
			}
			return result;
		} catch (Exception e) {
			LOG.error("We couldn't extract items from the string " + text, e);
			throw e;
		}
	}


}
