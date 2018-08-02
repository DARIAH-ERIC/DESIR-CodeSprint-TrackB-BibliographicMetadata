package eu.dariah.desir.trackb.helper;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

import java.util.List;

public class JsonHelper {
    public static List<YetAnotherBibliographicItem> convert(String json) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        List<YetAnotherBibliographicItem> yetAnotherBibliographicItems = null;
        try {
            yetAnotherBibliographicItems = mapper.readValue(json, new TypeReference<List<YetAnotherBibliographicItem>>() {});
        } catch (Exception e) {
            throw new Exception("Error converting JSON collection to List<YetAnotherBibliographicItem>", e);
        }
        return yetAnotherBibliographicItems;
    }
}
