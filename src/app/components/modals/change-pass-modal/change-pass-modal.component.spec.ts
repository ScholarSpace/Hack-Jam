import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassModalComponent } from './change-pass-modal.component';

describe('ChangePassModalComponent', () => {
  let component: ChangePassModalComponent;
  let fixture: ComponentFixture<ChangePassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePassModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
