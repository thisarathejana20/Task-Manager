package edu.personnel.taskmanagement.task.service.impl;

import edu.personnel.taskmanagement.task.dto.PageResponse;
import edu.personnel.taskmanagement.task.dto.TaskRequest;
import edu.personnel.taskmanagement.task.dto.TaskResponse;
import edu.personnel.taskmanagement.task.entity.Task;
import edu.personnel.taskmanagement.task.repository.TaskRepository;
import edu.personnel.taskmanagement.task.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Override
    public String save(TaskRequest taskRequest) {
        var task = Task.builder()
                .status(taskRequest.status())
                .title(taskRequest.title())
                .description(taskRequest.description())
                .build();
        Task save = taskRepository.save(task);

        return save.getId().toString();
    }

    public Task findByIdHelper(Long id) {
        return taskRepository.findById(id)
                .orElseThrow();
    }

    @Override
    public TaskResponse findById(Long id) {
        Task task = findByIdHelper(id);

        return TaskResponse.builder()
                .id(task.getId())
                .status(task.getStatus())
                .title(task.getTitle())
                .description(task.getDescription())
                .build();
    }

    @Override
    public boolean delete(Long id) {
        findByIdHelper(id);
        taskRepository.deleteById(id);
        return true;
    }

    @Override
    public TaskResponse update(Long id, TaskRequest taskRequest) {
        var task = findByIdHelper(id);
        task.setStatus(taskRequest.status());
        task.setTitle(taskRequest.title());
        task.setDescription(taskRequest.description());
        Task save = taskRepository.save(task);

        return TaskResponse.builder()
                .id(save.getId())
                .status(save.getStatus())
                .description(save.getDescription())
                .title(save.getTitle())
                .build();
    }

    @Override
    public PageResponse<TaskResponse> findAll(Integer page, Integer size) {
        PageRequest pageRequest = PageRequest.of(page, size);

        var tasks = taskRepository.findAll(pageRequest);
        var tasksResponse = tasks.stream()
                .map(task -> TaskResponse.builder()
                        .id(task.getId())
                        .status(task.getStatus())
                        .title(task.getTitle())
                        .description(task.getDescription())
                        .build());
        return new PageResponse<>(
                tasksResponse.toList(),
                tasks.getNumber(),
                tasks.getSize(),
                tasks.getTotalElements(),
                tasks.getTotalPages(),
                tasks.isFirst(),
                tasks.isLast());
    }
}
