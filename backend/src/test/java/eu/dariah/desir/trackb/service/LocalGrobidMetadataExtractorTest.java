package eu.dariah.desir.trackb.service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.impl.LocalGrobidMetadataExtractor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class LocalGrobidMetadataExtractorTest {
    private LocalGrobidMetadataExtractor extractor = new LocalGrobidMetadataExtractor("/Users/Yoann/Work/Grobid" +
            "/grobid-home/", new GrobidModelConverter());

    /**
     * Test method for
     * {@link eu.dariah.desir.trackb.service.impl.LocalGrobidMetadataExtractor#extractItems(java.lang.String)}.
     */
    @Test
    public void testExtractItemsString() {
        String citation = "Jahanian, F., Mok, Al. Safety analysis of timing properties in real-time systems. IEEE " +
                "Transactions on Software Engineering, 12(9), 890-904, September 1986.";
        final List<YetAnotherBibliographicItem> items = this.extractor.extractItems(citation);
        assertNotNull(items);
        YetAnotherBibliographicItem item = items.get(0);
        assertEquals("article", item.getEntryType());
        assertEquals("Farnam Jahanian and Aloysius Ka-Lau Mok", item.getAuthors());
        assertEquals("890-904", item.getPages());
        assertEquals("IEEE Transactions on Software Engineering", item.getJournal());
        assertEquals("Safety analysis of timing properties in real-time systems", item.getTitle());
        assertEquals("SE-12", item.getVolume());
        assertEquals("September 1986", item.getYear());
        assertEquals("10.1109/tse.1986.6313045", item.getDoi());
    }
}
