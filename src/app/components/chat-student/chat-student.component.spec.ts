import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStudentComponent } from './chat-student.component';

describe('ChatStudentComponent', () => {
  let component: ChatStudentComponent;
  let fixture: ComponentFixture<ChatStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
