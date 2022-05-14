package ru.post.translator.promela.backend;

public class PromelaProgramDto {
    private final String program;
    private final String[] warnings;
    private final String error;

    public PromelaProgramDto(String program, String[] warnings, String error) {
        this.program = program;
        this.warnings = warnings;
        this.error = error;
    }

    public String getProgram() {
        return program;
    }

    public String[] getWarnings() {
        return warnings;
    }

    public String getError() {
        return error;
    }
}
