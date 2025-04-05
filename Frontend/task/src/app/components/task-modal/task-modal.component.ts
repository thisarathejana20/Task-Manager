import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css',
})
export class TaskModalComponent {
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
      this.onSubmit.emit(this.taskForm.value);
      this.onClose.emit();
    }
  }

  closeModal() {
    this.onClose.emit();
  }
}
