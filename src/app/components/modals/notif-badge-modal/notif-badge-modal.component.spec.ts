import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifBadgeModalComponent } from './notif-badge-modal.component';

describe('NotifBadgeModalComponent', () => {
  let component: NotifBadgeModalComponent;
  let fixture: ComponentFixture<NotifBadgeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifBadgeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifBadgeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
