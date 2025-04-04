package edu.personnel.taskmanagement.task.repository;

import edu.personnel.taskmanagement.task.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
}
