import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDelete: EventEmitter<Task> = new EventEmitter<Task>();

  deleteTask() {
    this.onDelete.emit(this.task);
  }
}
