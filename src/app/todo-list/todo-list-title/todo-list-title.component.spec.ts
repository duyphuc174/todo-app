import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTitleComponent } from './todo-list-title.component';

describe('TodoListTitleComponent', () => {
  let component: TodoListTitleComponent;
  let fixture: ComponentFixture<TodoListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
