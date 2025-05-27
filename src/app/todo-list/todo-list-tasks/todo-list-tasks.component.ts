import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoListTasksItemComponent } from './todo-list-tasks-item/todo-list-tasks-item.component';
import { TodoListTaskDetailComponent } from '../todo-list-task-detail/todo-list-task-detail.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

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
export class TodoListTasksComponent {}
