package eu.dariah.desir.trackb;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.grobid.core.data.BiblioItem;
import org.grobid.core.engines.Engine;
import org.grobid.core.factory.GrobidFactory;
import org.grobid.core.main.GrobidHomeFinder;
import org.grobid.core.utilities.GrobidProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Extracts bibliographic metadata given a file or string using Grobid.
 *
 * @author rja
 */
@Service
public class MetadataExtractor {

	//private static final Logger LOG = Logger.getLogger()

	@Autowired
	private String grobidHome;

	private Engine engine;

	@PostConstruct
	public void init() {
		// If the location is customised: 
		final GrobidHomeFinder grobidHomeFinder = new GrobidHomeFinder(Arrays.asList(this.grobidHome));       

		//The GrobidProperties needs to be instantiate using the correct grobidHomeFinder or it will use the default 
		//locations
		GrobidProperties.getInstance(grobidHomeFinder);

		System.out.println(">>>>>>>> GROBID_HOME="+GrobidProperties.get_GROBID_HOME_PATH());

		this.engine = GrobidFactory.getInstance().createEngine();
	}

	public String extract(final String text) {

		// The GrobidHomeFinder can be instantiate without parameters to verify the grobid home in the standard
		// location (classpath, ../grobid-home, ../../grobid-home)


		// Biblio object for the result
		BiblioItem resHeader = new BiblioItem();


		final BiblioItem result = this.engine.processRawReference(text, true);

		System.out.println("#######################################################################");
		System.out.println("input string:  " + text);
		System.out.println("output BibTeX: " + result.toBibTeX());
		System.out.println("#######################################################################");

		return result.toBibTeX();
	}

}
