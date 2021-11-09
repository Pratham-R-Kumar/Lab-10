import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableCompComponent } from './todo-table-comp.component';

describe('TodoTableCompComponent', () => {
  let component: TodoTableCompComponent;
  let fixture: ComponentFixture<TodoTableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTableCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
