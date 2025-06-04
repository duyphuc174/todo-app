import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoListTasksItemComponent } from './todo-list-tasks-item/todo-list-tasks-item.component';
import { TodoListTaskDetailComponent } from '../todo-list-task-detail/todo-list-task-detail.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TASK_LIST } from '../../shared/constants/task.constant';

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
export class TodoListTasksComponent {
  private modalService = inject(NgbModal);
  tasks = TASK_LIST;

  openModalCreateTask() {
    this.modalService
      .open(TodoListTaskDetailComponent)
      .closed.subscribe((value) => {
        console.log(value);
      });
  }
}
