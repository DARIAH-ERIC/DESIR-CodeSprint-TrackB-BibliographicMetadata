package eu.dariah.desir.trackb;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
import org.springframework.stereotype.Service;

/**
 * Extracts bibliographic metadata given a file or string using Grobid.
 *
 * @author rja
 */
@Service
public class MetadataExtractor {

    private static final Logger LOG = LoggerFactory.getLogger(MetadataExtractor.class);

	@Autowired
	private String grobidHome;

	private Engine engine;

	/**
	 * Initialises GROBID
	 */
	@PostConstruct
	public void init() {
		// If the location is customised: 
		final GrobidHomeFinder grobidHomeFinder = new GrobidHomeFinder(Arrays.asList(this.grobidHome));       

		//The GrobidProperties needs to be instantiate using the correct grobidHomeFinder or it will use the default 
		//locations
		GrobidProperties.getInstance(grobidHomeFinder);

		LOG.debug("instantiating grobid by searching in the following locations: " + GrobidProperties.get_GROBID_HOME_PATH());

		this.engine = GrobidFactory.getInstance().createEngine();
	}

	/**
	 * Extracts bibliographic references from the given file.
	 * 
	 * @param file - a file (PDF) containing bibliographic references
	 * @return the list of bibliographic references
	 */
	public List<BiblioItem> extract(final File file) {

		final List<BibDataSet> items = this.engine.processReferences(file, false);

		// copy BiblioItems into new list
		final List<BiblioItem> result = new ArrayList<BiblioItem>(items.size());
		for (final BibDataSet bibDataSet : items) {
			result.add(bibDataSet.getResBib());
		}
		
		return result;
	}
	
	/**
	 * Extract bibliographic metadata from the string and return it as BibTeX.
	 * 
	 * @param text
	 * @return the extracted metadata in BibTeX format
	 */
	public BiblioItem extract(final String text) {

		// The GrobidHomeFinder can be instantiate without parameters to verify the grobid home in the standard
		// location (classpath, ../grobid-home, ../../grobid-home)

		final BiblioItem result = this.engine.processRawReference(text, true);

		LOG.debug("input:  " + text);
		if (LOG.isDebugEnabled())
			LOG.debug("output: " + result.toBibTeX());

		return result;
	}

}
