package edu.personnel.taskmanagement.task.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(schema = "tasks")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
@EntityListeners(AuditingEntityListener.class)
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private String status;
    @CreatedDate
    @Column(nullable = false,updatable = false)
    private LocalDateTime createdAt;
}
