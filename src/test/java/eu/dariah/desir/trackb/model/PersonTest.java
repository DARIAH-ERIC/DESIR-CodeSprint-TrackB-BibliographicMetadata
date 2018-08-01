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

public class PersonTest {
    @Test
    public void whenUseJsonViewToSerialize_thenCorrect() throws JsonProcessingException {
            Person person = new Person();
            person.setFirstName("John");
            person.setLastName("Doe");

            ObjectMapper mapper = new ObjectMapper();
            mapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);

            String result = mapper
                    .writerWithView(JsonViews.Public.class)
                    .writeValueAsString(person);

            assertThat(result, containsString("John"));
            assertThat(result, not(containsString("Jane")));
            assertEquals(result, "{\"firstName\":\"John\",\"lastName\":\"Doe\"}");
        }
}
