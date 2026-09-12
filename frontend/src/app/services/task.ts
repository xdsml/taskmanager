import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8081/api/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  createTask(task: {
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}): Observable<Task> {
  return this.http.post<Task>(this.apiUrl, task);
}
deleteTask(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

updateTask(id: number, task: {
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}): Observable<Task> {
  return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
}
}