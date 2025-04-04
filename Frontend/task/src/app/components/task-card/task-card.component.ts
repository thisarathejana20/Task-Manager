import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() onUpdate = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  getStatusColor() {
    switch (this.task.status) {
      case 'Pending':
        return 'bg-red-500';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }

  openUpdateModal() {
    this.onUpdate.emit(); // Notify parent to open modal
  }

  handleDelete() {
    this.onDelete.emit(); // Notify parent to delete task
  }
}
