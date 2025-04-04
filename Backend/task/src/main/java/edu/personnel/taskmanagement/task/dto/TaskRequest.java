package edu.personnel.taskmanagement.task.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record TaskRequest(
        @NotNull(message = "Title is required")
        @NotEmpty(message = "Title can not be empty")
        String title,
        @NotNull(message = "Description is required")
        @NotEmpty(message = "Description can not be empty")
        String description,
        @NotNull(message = "Status is required")
        @NotEmpty(message = "Status can not be empty")
        String status
) {
}
