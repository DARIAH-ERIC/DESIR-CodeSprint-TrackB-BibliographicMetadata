package eu.dariah.desir.trackb.helper;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

import java.util.List;

/**
 * Helper class to convert JSON to our internal data model.
 * 
 */
public class JsonHelper {
    /**
     * Convert JSON to a list of {@link YetAnotherBibliographicItem}'s.
     * 
     * @param json
     * @return A list of {@link YetAnotherBibliographicItem}'s.
     * @throws Exception
     */
    public static List<YetAnotherBibliographicItem> convert(String json) throws Exception {
        try {
            return new ObjectMapper().readValue(json, new TypeReference<List<YetAnotherBibliographicItem>>() {
            	// nothing to do here
            });
        } catch (Exception e) {
            throw new Exception("Error converting JSON collection to List<YetAnotherBibliographicItem>", e);
        }
    }
}
