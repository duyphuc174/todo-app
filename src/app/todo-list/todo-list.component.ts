import { Component } from '@angular/core';
import { TodoListTitleComponent } from './todo-list-title/todo-list-title.component';
import { TodoListMenuComponent } from './todo-list-menu/todo-list-menu.component';
import { TodoListTasksComponent } from './todo-list-tasks/todo-list-tasks.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoListTitleComponent,
    TodoListMenuComponent,
    TodoListTasksComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {}
