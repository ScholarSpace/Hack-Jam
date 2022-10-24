import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifClosedModalComponent } from './notif-closed-modal.component';

describe('NotifClosedModalComponent', () => {
  let component: NotifClosedModalComponent;
  let fixture: ComponentFixture<NotifClosedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifClosedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifClosedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
