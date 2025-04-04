import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-update-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-update-modal.component.html',
  styleUrl: './task-update-modal.component.css',
})
export class TaskUpdateModalComponent implements OnInit {
  @Input() task: any; // Task object passed from parent
  @Output() onClose = new EventEmitter<void>(); // Close event
  @Output() onUpdate = new EventEmitter<any>(); // Update event

  updateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title: [this.task?.title, Validators.required],
      description: [this.task?.description, Validators.required],
      status: [this.task?.status, Validators.required],
    });
  }

  submitForm() {
    if (this.updateForm.valid) {
      this.onUpdate.emit(this.updateForm.value); // Emit updated task
      this.onClose.emit(); // Close modal
    }
  }

  closeModal() {
    this.onClose.emit(); // Close modal without updating
  }
}
