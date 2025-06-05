import { Injectable } from '@angular/core';
import { Task, TaskBody } from '../models/task.model';

const TASK_LOCAL_STORAGE_KEY = 'todo-app-tasks';
const COUNT_ID_LOCAL_STORAGE_KEY = 'todo-app-count-id';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  autoId(): number {
    const countId = localStorage.getItem(COUNT_ID_LOCAL_STORAGE_KEY);
    const id = countId ? +countId + 1 : 1;
    localStorage.setItem(COUNT_ID_LOCAL_STORAGE_KEY, id.toString());
    return id;
  }

  getTasks(): Task[] {
    const tasks = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    if (tasks) {
      return JSON.parse(tasks);
    }
    localStorage.setItem(COUNT_ID_LOCAL_STORAGE_KEY, '0');
    return [];
  }

  createTask(task: TaskBody): Task | null {
    const tasks = this.getTasks();
    const newTask: Task = { ...task, id: this.autoId() };
    tasks.push(newTask);
    localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    return newTask;
  }

  getTaskById(id: number): Task | null {
    const tasks = this.getTasks();
    const existingTask = tasks.find((task) => task.id === id);
    return existingTask || null;
  }

  deleteTask(id: number): Task | null {
    const tasks = this.getTasks();
    const existingTask = tasks.find((task) => task.id === id);
    if (!existingTask) {
      return null;
    }
    const newTasks = tasks.filter((task) => task.id !== existingTask.id);
    localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    return existingTask;
  }
}
