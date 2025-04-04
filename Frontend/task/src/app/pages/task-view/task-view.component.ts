import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { TaskUpdateModalComponent } from '../../components/task-update-modal/task-update-modal.component';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-view',
  imports: [CommonModule, TaskCardComponent, TaskUpdateModalComponent],
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

  selectedTask: any = null;
  showModal: boolean = false;

  openUpdateModal(task: any) {
    this.selectedTask = { ...task }; // Clone task to avoid modifying original data
    this.showModal = true;
  }

  closeUpdateModal() {
    this.selectedTask = null;
    this.showModal = false;
  }

  updateTask(updatedTask: any) {
    this.tasks = this.tasks.map((task) =>
      task.title === this.selectedTask.title ? updatedTask : task
    );
    this.closeUpdateModal();
  }

  deleteTask(taskTitle: string) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
  }
}
