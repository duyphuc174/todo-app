import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTaskDetailComponent } from './todo-list-task-detail.component';

describe('TodoListTaskDetailComponent', () => {
  let component: TodoListTaskDetailComponent;
  let fixture: ComponentFixture<TodoListTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTaskDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
