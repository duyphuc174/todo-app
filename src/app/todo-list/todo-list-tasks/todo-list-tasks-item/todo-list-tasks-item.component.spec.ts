import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTasksItemComponent } from './todo-list-tasks-item.component';

describe('TodoListTasksItemComponent', () => {
  let component: TodoListTasksItemComponent;
  let fixture: ComponentFixture<TodoListTasksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTasksItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
