package eu.dariah.desir.trackb.service;

import eu.dariah.desir.trackb.controller.ExtractionControllerTest;
import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import org.apache.commons.io.IOUtils;
import org.bibsonomy.model.logic.LogicInterface;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;


/**
 * Created by hube on 8/2/2018.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class BibSonomyAdaptorTest {

    private static final Logger LOG = LoggerFactory.getLogger(ExtractionControllerTest.class);

    @Autowired
    BibSonomyAdaptor adaptor;

    /**
     */
    @Test
    public void storeAndDeleteItem() throws Exception {

        assertNotNull(adaptor);

        //store
        List<YetAnotherBibliographicItem> items = new ArrayList<>();
        Set<String> tags = new HashSet<>();
        tags.add("test_tag");
        assertNotNull(tags);

        YetAnotherBibliographicItem item1 = new YetAnotherBibliographicItem();
        item1.setTitle("test1");
        item1.setTags(tags);
        item1.setYear("2018");
        item1.setEntryType("test");
        item1.setAuthors("Test Author");
        items.add(item1);

        YetAnotherBibliographicItem item2 = new YetAnotherBibliographicItem();
        item2.setTitle("test2");
        item2.setTags(tags);
        item1.setYear("2018");
        item1.setEntryType("test");
        item1.setAuthors("Test Author");
        items.add(item2);

        assertNotNull(items);
        List<String> hashs = adaptor.storeItems(items);


        //delete
        adaptor.deleteItems(hashs);
    }

}















