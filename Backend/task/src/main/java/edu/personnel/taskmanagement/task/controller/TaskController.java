package edu.personnel.taskmanagement.task.controller;

import edu.personnel.taskmanagement.task.dto.PageResponse;
import edu.personnel.taskmanagement.task.dto.TaskRequest;
import edu.personnel.taskmanagement.task.dto.TaskResponse;
import edu.personnel.taskmanagement.task.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<PageResponse<TaskResponse>> getTasks(
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "size", defaultValue = "10") Integer size
    ) {
        return ResponseEntity.ok(taskService.findAll(page, size));
    }

    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody @Valid TaskRequest taskRequest) {
        return ResponseEntity.ok(taskService.save(taskRequest));
    }

    @PutMapping("/{id}")
    public TaskResponse updateTask(@PathVariable Long id,
                                   @RequestBody @Valid TaskRequest taskRequest) {
        return taskService.update(id, taskRequest);
    }

    @DeleteMapping("/{id}")
    public boolean deleteTask(@PathVariable Long id) {
        return taskService.delete(id);
    }

    @GetMapping("/{id}")
    public TaskResponse getTask(@PathVariable Long id) {
        return taskService.findById(id);
    }
}
