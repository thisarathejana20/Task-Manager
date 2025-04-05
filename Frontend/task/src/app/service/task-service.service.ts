import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';
import { PageResponse } from '../models/PageResponse';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiUrl = 'http://localhost:8080/tasks';
  getTasks(
    page: number = 0,
    size: number = 10
  ): Observable<PageResponse<Task>> {
    return this.http.get<PageResponse<Task>>(
      `${this.apiUrl}?page=${page}&size=${size}`
    );
  }
  getTaskById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addTask(task: Task) {
    return this.http.post(this.apiUrl, task);
  }
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
  deleteTask(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
