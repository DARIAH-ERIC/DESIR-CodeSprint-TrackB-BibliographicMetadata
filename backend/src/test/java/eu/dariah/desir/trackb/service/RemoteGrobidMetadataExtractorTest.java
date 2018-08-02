package eu.dariah.desir.trackb.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.io.InputStream;
import java.util.List;

import org.bibsonomy.model.util.BibTexUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.impl.RemoteGrobidMetadataExtractor;

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

		// to print BibTeX for testing
		final BibSonomyModelConverter bib = new BibSonomyModelConverter();

		int i = 0;
		for (final YetAnotherBibliographicItem item : items) {
			assertNotNull(item);
			System.out.println(i++);
			System.out.println(BibTexUtils.toBibtexString(bib.convertToBibTex(item)));
		}
		// test item 5
		final YetAnotherBibliographicItem item = items.get(5);
		// FIXME: entrytype
		assertEquals("• Gartner and Richard", item.getAuthors());
		assertEquals("10.1007/s10502-014-9225-1", item.getDoi());
		assertEquals("Archival Science", item.getJournal());
		assertEquals("3", item.getNumber());
		assertEquals("295--313", item.getPages());
		assertEquals("Springer Nature", item.getPublisher());
		assertEquals("An XML schema for enhancing the semantic interoperability of archival description", item.getTitle());
		assertEquals("15", item.getVolume());
		assertEquals("2015-09", item.getYear());
		
	}

}
