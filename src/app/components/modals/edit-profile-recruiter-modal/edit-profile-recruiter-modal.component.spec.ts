import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileRecruiterModalComponent } from './edit-profile-recruiter-modal.component';

describe('EditProfileRecruiterModalComponent', () => {
  let component: EditProfileRecruiterModalComponent;
  let fixture: ComponentFixture<EditProfileRecruiterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileRecruiterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileRecruiterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
