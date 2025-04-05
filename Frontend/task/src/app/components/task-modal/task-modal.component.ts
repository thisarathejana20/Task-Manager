import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/Task';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css',
})
export class TaskModalComponent implements OnInit {
  @Input() mode: 'create' | 'update' = 'create';
  @Input() task: any = null;

  @Output() onClose = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<Task>();

  taskForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      id: [this.task?.id || null],
      title: [this.task?.title || '', Validators.required],
      description: [this.task?.description || '', Validators.required],
      status: [this.task?.status || 'Pending', Validators.required],
    });
  }

  submitForm() {
    if (this.taskForm.valid) {
      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text:
          this.mode === 'create'
            ? 'Task Created Successfully!'
            : 'Task Updated Successfully!',
      });

      // Emit form data and close modal
      this.onSubmit.emit(this.taskForm.value);
      this.onClose.emit();
    } else {
      // Show error alert if form is invalid
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the required fields.',
      });
    }
  }

  closeModal() {
    // Show confirmation alert when closing modal
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You have unsaved changes. Do you really want to close the modal?',
      showCancelButton: true,
      confirmButtonText: 'Yes, close it',
      cancelButtonText: 'No, keep editing',
    }).then((result) => {
      if (result.isConfirmed) {
        this.onClose.emit(); // Close the modal if confirmed
      }
    });
  }
}
