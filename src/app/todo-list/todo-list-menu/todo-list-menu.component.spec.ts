import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMenuComponent } from './todo-list-menu.component';

describe('TodoListMenuComponent', () => {
  let component: TodoListMenuComponent;
  let fixture: ComponentFixture<TodoListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
