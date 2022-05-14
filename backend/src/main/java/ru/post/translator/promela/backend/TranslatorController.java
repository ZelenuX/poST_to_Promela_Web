package ru.post.translator.promela.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class TranslatorController {
    @GetMapping("/test")
    public String test(@RequestParam(name = "p") String p) {
        return p + " received";
    }
    @PostMapping("/translate")
    public PromelaProgramDto translate(@RequestBody String postProgram) {
        return new PromelaProgramDto(postProgram, new String[]{"warning 1", "warning 2"}, null);
    }
}
