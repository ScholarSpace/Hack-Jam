import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRecruiterComponent } from './chat-recruiter.component';

describe('ChatRecruiterComponent', () => {
  let component: ChatRecruiterComponent;
  let fixture: ComponentFixture<ChatRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
