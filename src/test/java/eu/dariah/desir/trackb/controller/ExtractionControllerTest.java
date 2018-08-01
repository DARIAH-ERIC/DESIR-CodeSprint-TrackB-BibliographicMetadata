package eu.dariah.desir.trackb.controller;

import eu.dariah.desir.trackb.service.MetadataExtractor;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.io.File;
import java.util.Arrays;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.Assert.assertNotNull;

/**
 * Created by hube on 8/1/2018.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class ExtractionControllerTest {
    private static final Logger LOG = LoggerFactory.getLogger(ExtractionController.class);

    private MockMvc mockMvc;

//    @Autowired
//    private MetadataExtractor metadataExtractorMock;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

//    @Test
    public void extractTest() throws Exception {
//        when(metadataExtractorMock.findAll()).thenReturn(Arrays.asList(first, second));

        MockMultipartFile pdfFile = new MockMultipartFile("file", "filename.txt", MediaType.APPLICATION_PDF_VALUE,
                ("some PDF data").getBytes());
        assertNotNull(mockMvc);

        mockMvc.perform(post("/extract", pdfFile)
                .contentType(MediaType.MULTIPART_FORM_DATA))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE));
//                .andExpect(jsonPath("$", hasSize(2)))
//                .andExpect(jsonPath("$[0].id", is(1)))
//                .andExpect(jsonPath("$[0].description", is("Lorem ipsum")))
//                .andExpect(jsonPath("$[0].title", is("Foo")))
//                .andExpect(jsonPath("$[1].id", is(2)))
//                .andExpect(jsonPath("$[1].description", is("Lorem ipsum")))
//                .andExpect(jsonPath("$[1].title", is("Bar")));

//        verify(metadataExtractorMock, times(1)).findAll();
//        verifyNoMoreInteractions(metadataExtractorMock);
    }
}
