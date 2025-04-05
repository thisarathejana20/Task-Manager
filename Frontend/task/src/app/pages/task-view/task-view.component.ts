import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { Task } from '../../models/Task';
import { TaskModalComponent } from '../../components/task-modal/task-modal.component';
import { TaskServiceService } from '../../service/task-service.service';
import { PageResponse } from '../../models/PageResponse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-view',
  imports: [CommonModule, TaskCardComponent, TaskModalComponent, FormsModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css',
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  pageSize: number = 10;
  isCreateModalOpen: boolean = false;
  isUpdateModalOpen: boolean = false;
  selectedTask: Task | null = null;
  errorMessage: string | null = null;
  selectedStatus: string = ''; // Holds the selected status for filtering
  filteredTasks: Task[] = [];

  constructor(private readonly taskService: TaskServiceService) {}

  loadTasks(): void {
    this.taskService.getTasks(this.currentPage, this.pageSize).subscribe({
      next: (pageResponse: PageResponse<Task>) => {
        this.tasks = pageResponse.content; // The actual task list
        this.totalPages = pageResponse.totalPages; // Total number of pages
        this.totalElements = pageResponse.totalElements;
        this.filterTasksByStatus(); // Total number of tasks
      },
      error: (err) => {
        console.error('Error fetching tasks', err);
      },
    });
  }

  // Navigation for page change
  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadTasks(); // Reload tasks for the new page
    }
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  openUpdateModal(task: any) {
    this.selectedTask = { ...task };
    this.isUpdateModalOpen = true;
  }

  addTask(newTask: Task) {
    // Add the new task to the list and close the modal
    this.taskService.addTask(newTask).subscribe({
      next: () => {
        this.loadTasks(); // Reload tasks to reflect the new task
        this.isCreateModalOpen = false;
      },
      error: (err) => console.error('Error adding task', err),
    });
  }

  updateTask(updatedTask: Task) {
    // Update the selected task and close the modal
    this.taskService.updateTask(updatedTask).subscribe({
      next: () => {
        this.loadTasks(); // Reload tasks to reflect the updated task
        this.isUpdateModalOpen = false;
      },
      error: (err) => console.error('Error updating task', err),
    });
  }

  deleteTask(id: number) {
    // Delete the task and reload the list
    this.taskService.deleteTask(id).subscribe({
      next: (res) => {
        if (res) {
          this.loadTasks(); // Reload tasks to reflect the deletion
        } else {
          this.errorMessage = 'Failed to delete task.'; // Handle error case
        }
      },
      error: (err) => console.error('Error deleting task', err), // Reload tasks after deletion
    });
  }

  // Filter tasks based on selected status
  filterTasksByStatus(): void {
    if (this.selectedStatus) {
      this.filteredTasks = this.tasks.filter(
        (task) => task.status === this.selectedStatus
      );
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
