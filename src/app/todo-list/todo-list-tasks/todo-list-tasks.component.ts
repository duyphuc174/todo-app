import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoListTasksItemComponent } from './todo-list-tasks-item/todo-list-tasks-item.component';
import { TodoListTaskDetailComponent } from '../todo-list-task-detail/todo-list-task-detail.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../shared/services/task.service';
import { Task, TaskBody } from '../../shared/models/task.model';
import { TaskStatus } from '../../shared/constants/task.constant';

@Component({
  selector: 'app-todo-list-tasks',
  imports: [
    CommonModule,
    TodoListTasksItemComponent,
    TodoListTaskDetailComponent,
    PaginationComponent,
  ],
  templateUrl: './todo-list-tasks.component.html',
  styleUrl: './todo-list-tasks.component.scss',
})
export class TodoListTasksComponent implements OnInit {
  private modalService = inject(NgbModal);
  private taskService = inject(TaskService);
  tasks!: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  openModalCreateTask() {
    this.modalService
      .open(TodoListTaskDetailComponent)
      .closed.subscribe((value) => {
        this.createNewTask({
          title: value?.title || '',
          description: value?.description || '',
          dueDate: value?.dueDate || '',
          status: TaskStatus.PENDING,
        });
      });
  }

  createNewTask(body: TaskBody) {
    const task = this.taskService.createTask(body);
    // Cách 1
    // this.tasks = this.taskService.getTasks();

    // Cách 2
    if (task?.id) {
      this.tasks.push(task);
    }
  }

  deleteTask(task: Task) {
    const deletedTask = this.taskService.deleteTask(task.id);
    if (deletedTask?.id) {
      // Cách 1
      // this.tasks = this.taskService.getTasks();

      // Cách 2
      this.tasks = this.tasks.filter((t) => t.id !== deletedTask.id);
    }
  }
}
