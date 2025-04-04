package edu.personnel.taskmanagement.task.service;

import edu.personnel.taskmanagement.task.dto.PageResponse;
import edu.personnel.taskmanagement.task.dto.TaskRequest;
import edu.personnel.taskmanagement.task.dto.TaskResponse;
import edu.personnel.taskmanagement.task.entity.Task;

public interface TaskService {
    String save(TaskRequest taskRequest);
    TaskResponse findById(Long id);
    boolean delete(Long id);
    TaskResponse update(Long id, TaskRequest taskRequest);
    PageResponse<TaskResponse> findAll(Integer page, Integer size);
    public Task findByIdHelper(Long id);
}
