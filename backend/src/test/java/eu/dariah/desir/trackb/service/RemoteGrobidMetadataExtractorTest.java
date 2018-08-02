package eu.dariah.desir.trackb.service;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.io.InputStream;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class RemoteGrobidMetadataExtractorTest {

	private RemoteGrobidMetadataExtractor extractor = new RemoteGrobidMetadataExtractor("http://traces1.inria.fr/grobid/api", new GrobidModelConverter());
	
	
	
	/**
	 * Test method for {@link eu.dariah.desir.trackb.service.RemoteGrobidMetadataExtractor#extractItems(java.io.File)}.
	 */
	@Test
	public void testExtractItemsFile() {
		//fail("Not yet implemented");
	}

	/**
	 * Test method for {@link eu.dariah.desir.trackb.service.RemoteGrobidMetadataExtractor#extractItems(java.lang.String)}.
	 */
	@Test
	public void testExtractItemsString() {
		//fail("Not yet implemented");
	}

	/**
	 * Test method for {@link eu.dariah.desir.trackb.service.RemoteGrobidMetadataExtractor#processFulltextDocument(java.io.InputStream)}.
	 */
	@Test
	public void testProcessFulltextDocument() {
		assertNotNull(this.extractor);
		final InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream("EAD-ODD_A_solution_for_project-oriented_EAD_schemes.pdf");
		
		final InputStream input = resourceAsStream;
		final List<YetAnotherBibliographicItem> items = this.extractor.processFulltextDocument(input);
		assertNotNull(items);
		
		for (final YetAnotherBibliographicItem item : items) {
			assertNotNull(item);
			System.out.println(item);
		}
		
		

	}

}
