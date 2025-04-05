import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { Task } from '../../models/Task';
import { TaskModalComponent } from '../../components/task-modal/task-modal.component';

@Component({
  selector: 'app-task-view',
  imports: [CommonModule, TaskCardComponent, TaskModalComponent],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css',
})
export class TaskViewComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Fix Login Bug',
      description: 'Resolve login failures in production.',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Write Unit Tests',
      description: 'Ensure 80% code coverage for services.',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Deploy Backend API',
      description: 'Push latest API changes to AWS server.',
      status: 'Completed',
    },
  ];

  isCreateModalOpen = false;
  isUpdateModalOpen = false;
  selectedTask: any = null;

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  openUpdateModal(task: any) {
    this.selectedTask = { ...task };
    this.isUpdateModalOpen = true;
  }

  addTask(newTask: any) {
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: any) {
    this.tasks = this.tasks.map((task) =>
      task.title === this.selectedTask.title ? updatedTask : task
    );
  }

  deleteTask(title: string) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }
}
