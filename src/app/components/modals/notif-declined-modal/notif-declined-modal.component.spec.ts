import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifDeclinedModalComponent } from './notif-declined-modal.component';

describe('NotifDeclinedModalComponent', () => {
  let component: NotifDeclinedModalComponent;
  let fixture: ComponentFixture<NotifDeclinedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifDeclinedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifDeclinedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
