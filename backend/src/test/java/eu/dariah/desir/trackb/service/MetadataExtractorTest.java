package eu.dariah.desir.trackb.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.io.File;
import java.net.URL;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
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
public class MetadataExtractorTest {

	@Autowired
	private MetadataExtractor extractor;
	
	/**
	 * Test method for {@link eu.dariah.desir.trackb.service.MetadataExtractor#extractItems(java.io.File)}.
	 * @throws Exception 
	 */
	@Test
	public void testExtractItemsFile() throws Exception {
		final URL url = this.getClass().getClassLoader().getResource("EAD-ODD_ A_solution_for_project-oriented_EAD_schemes.pdf");
		assertNotNull(url);
		final File file = new File(url.getFile());
		assertNotNull(file);
		final List<YetAnotherBibliographicItem> output = this.extractor.extractItems(file);
		
		assertNotNull(output);
		final YetAnotherBibliographicItem item = output.get(0);
		assertNotNull(item);
		assertEquals("Echo chambers online?: Politically motivated selective exposure among internet news users", item.getTitle());
		
	}

	/**
	 * Test method for {@link eu.dariah.desir.trackb.service.MetadataExtractor#extractItems(java.lang.String)}.
	 */
	@Test
	public void testExtractItemsString() {
		final String input = "Linek, S., Teka Hadgu, A., Hoffmann, C.P., Jäschke, R., Puschmann, C.: It’s all about information? The Following Behaviour of Professors and PhD Students on Twitter. The Journal of Web Science. 3, 1–15 2017. ";
		final List<YetAnotherBibliographicItem> output = this.extractor.extractItems(input);

		assertNotNull(output);
		final YetAnotherBibliographicItem item = output.get(0);
		assertNotNull(item);
		assertNotNull(item.getJournal());
		assertNotNull(item.getTitle());
		
		
		assertEquals("It’s all about information? The Following Behaviour of Professors and PhD Students on Twitter", item.getTitle());
		assertEquals("The Journal of Web Science", item.getJournal());
		assertEquals("2017", item.getYear());
		assertEquals("1--15", item.getPages());
		assertEquals("3", item.getVolume());
		assertEquals("article", item.getEntryType());
		assertEquals("S Linek and A Teka Hadgu and C Hoffmann and R Jäschke and C Puschmann", item.getAuthors());
	}

}
