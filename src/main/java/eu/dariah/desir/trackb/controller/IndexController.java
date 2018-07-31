package eu.dariah.desir.trackb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    @RequestMapping(value = "/error", method = {RequestMethod.POST, RequestMethod.GET})
    public String error() {
        return "error";
    }
}

