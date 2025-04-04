package edu.personnel.taskmanagement.task.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Map;
import java.util.Set;

@AllArgsConstructor@Setter
@Getter
@Builder
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ExceptionResponse {
    private String errorDescription;
    private String error;
    private Set<String> validationErrors;
    private Map<String, String> errors;
}
