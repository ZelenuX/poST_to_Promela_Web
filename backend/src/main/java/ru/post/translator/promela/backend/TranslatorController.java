package ru.post.translator.promela.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TranslatorController {
    @GetMapping("/test")
    public String test(@RequestParam(name = "p") String p) {
        return p + " received";
    }
}
