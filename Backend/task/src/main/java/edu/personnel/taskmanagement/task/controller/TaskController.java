package edu.personnel.taskmanagement.task.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {
    @GetMapping
    public String getTasks() {
        return "tasks";
    }

    @PostMapping
    public String createTask() {
        return "tasks";
    }

    @PutMapping("/{id}")
    public String updateTask(@PathVariable Long id) {
        return "tasks";
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        return "tasks";
    }

    @GetMapping("/{id}")
    public String getTask(@PathVariable Long id) {
        return "tasks";
    }
}
