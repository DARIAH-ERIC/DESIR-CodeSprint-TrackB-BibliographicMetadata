package eu.dariah.desir.trackb.model;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dariah.desir.trackb.json.JsonViews;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.core.StringContains.containsString;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

/**
 * Test serialization of {@link YetAnotherBibliographicItem}.
 *
 * @author rja
 */
public class YetAnotherBibliographicItemTest {
	@Test
	public void whenUseJsonViewToSerialize_thenCorrect() throws JsonProcessingException {
		final YetAnotherBibliographicItem item = new YetAnotherBibliographicItem();
		item.setTitle("Cronology Protection Conjecture");
		item.setAuthors("S. W. Hawking");
		item.setYear("1992");

		final ObjectMapper mapper = new ObjectMapper();
		mapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);

		final String result = mapper
				.writerWithView(JsonViews.Public.class)
				.writeValueAsString(item);
		
		assertThat(result, containsString("Hawking"));
		assertThat(result, not(containsString("Einstein")));
		assertEquals(result, "{\"entryType\":null,\"address\":null,\"booktitle\":null,\"chapter\":null,\"doi\":null,\"edition\":null,\"institution\":null,\"journal\":null,\"number\":null,\"pages\":null,\"publisher\":null,\"series\":null,\"title\":\"Cronology Protection Conjecture\",\"volume\":null,\"day\":null,\"month\":null,\"year\":\"1992\",\"authors\":\"S. W. Hawking\",\"editors\":null,\"tags\":null}");
	}
}
