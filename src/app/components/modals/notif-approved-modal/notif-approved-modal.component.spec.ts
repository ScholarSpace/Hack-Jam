import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifApprovedModalComponent } from './notif-approved-modal.component';

describe('NotifApprovedModalComponent', () => {
  let component: NotifApprovedModalComponent;
  let fixture: ComponentFixture<NotifApprovedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifApprovedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifApprovedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
