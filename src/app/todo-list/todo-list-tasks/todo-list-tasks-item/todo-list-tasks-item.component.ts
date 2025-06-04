import { Component, Input } from '@angular/core';
import { Task } from '../../../shared/models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-tasks-item',
  imports: [CommonModule],
  templateUrl: './todo-list-tasks-item.component.html',
  styleUrl: './todo-list-tasks-item.component.scss',
})
export class TodoListTasksItemComponent {
  @Input() task!: Task;
}
