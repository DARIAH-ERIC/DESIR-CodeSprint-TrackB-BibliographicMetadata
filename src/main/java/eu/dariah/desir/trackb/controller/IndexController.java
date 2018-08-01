package eu.dariah.desir.trackb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * The main controller which serves the Index and Error pages
 */
@Controller
public class IndexController {

    private static final Logger LOG = LoggerFactory.getLogger(IndexController.class);

    /**
     * Index page controller of the application
     * @return The name of the template: index
     */
    @GetMapping(value = {"/", "/index"})
    public String index() {
        LOG.info("Reached the index page");
        return "index";
    }

    /**
     * Error page controller
     * @return The name of the error page (without suffix)
     */
    @RequestMapping(value = "/error", method = {RequestMethod.POST, RequestMethod.GET})
    public String error() {
        return "error";
    }
}

