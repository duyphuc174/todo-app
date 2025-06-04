import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NgbActiveModal,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list-task-detail',
  imports: [NgbDatepickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-list-task-detail.component.html',
  styleUrl: './todo-list-task-detail.component.scss',
})
export class TodoListTaskDetailComponent implements OnInit {
  private modalService = inject(NgbActiveModal);
  private fb = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      dueDate: [{}],
    });
  }

  onSubmit() {
    const formValue = this.form.getRawValue();
    this.modalService.close(formValue);
  }

  closeModal() {
    this.modalService.close();
  }
}
