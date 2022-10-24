import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifInterviewModalComponent } from './notif-interview-modal.component';

describe('NotifInterviewModalComponent', () => {
  let component: NotifInterviewModalComponent;
  let fixture: ComponentFixture<NotifInterviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifInterviewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifInterviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
