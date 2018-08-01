package eu.dariah.desir.trackb;

import java.util.Arrays;

import javax.annotation.PostConstruct;

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

	private Engine engine;

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
	 * Extract bibliographic metadata from the string and return it as BibTeX.
	 * 
	 * @param text
	 * @return the extracted metadata in BibTeX format
	 */
	public String extract(final String text) {

		// The GrobidHomeFinder can be instantiate without parameters to verify the grobid home in the standard
		// location (classpath, ../grobid-home, ../../grobid-home)


		// Biblio object for the result
		BiblioItem resHeader = new BiblioItem();


		final BiblioItem result = this.engine.processRawReference(text, true);

		final String bibtex = result.toBibTeX();
		
		LOG.debug("input:  " + text);
		LOG.debug("output: " + bibtex);

		return bibtex;
	}

}
