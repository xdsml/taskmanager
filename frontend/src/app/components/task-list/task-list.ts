import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {

  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);

  tasks: Task[] = [];

  newTask = {
    title: '',
    description: '',
    status: 'TODO' as 'TODO' | 'IN_PROGRESS' | 'DONE'
  };

  editingTaskId: number | null = null;

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
  this.taskService.getTasks().subscribe({
    next: (data) => {
      this.tasks = data;
      console.log('Tasks reçues :', data);
      this.cdr.detectChanges();
    },
    error: (error) => {
      console.error('Erreur lors du chargement des tâches :', error);
    }
  });
}


  createTask(): void {
  this.taskService.createTask(this.newTask).subscribe({
    next: (createdTask) => {
      console.log('Tâche créée :', createdTask);

      this.tasks.push(createdTask);

      this.newTask = {
        title: '',
        description: '',
        status: 'TODO'
      };
    },
    error: (error) => {
      console.error('Erreur lors de la création de la tâche :', error);
    }
  });
}


editTask(task: Task): void {
  this.editingTaskId = task.id;

  this.newTask = {
    title: task.title,
    description: task.description,
    status: task.status
  };
}


updateTask(): void {
  if (this.editingTaskId === null) {
    return;
  }

  this.taskService.updateTask(this.editingTaskId, this.newTask).subscribe({
    next: (updatedTask) => {
      console.log('Tâche modifiée :', updatedTask);

      this.tasks = this.tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );

      this.newTask = {
        title: '',
        description: '',
        status: 'TODO'
      };

      this.editingTaskId = null;

      this.cdr.detectChanges();
    },
    error: (error) => {
      console.error('Erreur lors de la modification :', error);
    }
  });
}



deleteTask(id: number): void {
  this.taskService.deleteTask(id).subscribe({
    next: () => {
      console.log('Tâche supprimée :', id);
      console.log('Avant suppression :', this.tasks);

      this.tasks = this.tasks.filter(task => task.id !== id);

      console.log('Après suppression :', this.tasks);
    },
    error: (error) => {
      console.error('Erreur lors de la suppression :', error);
    }
  });
}
}