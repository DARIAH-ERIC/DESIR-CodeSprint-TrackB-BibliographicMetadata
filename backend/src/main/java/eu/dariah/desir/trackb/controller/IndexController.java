package eu.dariah.desir.trackb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


/**
 * The main controller which serves the Index and Error pages
 */
@Controller
public class IndexController {

    /**
     * Index page controller of the application
     * @return The name of the template: index
     */
    @GetMapping(value = {"/", "/index"})
    public String index() {
        return "index";
    }

    /**
     * Error page controller
     * @return The name of the error page (without suffix)
     */
    @RequestMapping(value = "/error", method = {RequestMethod.POST, RequestMethod.GET}) //Both, POST and GET, are covered
    public String error() {
        return "error";
    }
}

