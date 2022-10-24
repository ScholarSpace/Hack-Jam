import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileStudentModalComponent } from './edit-profile-student-modal.component';

describe('EditProfileStudentModalComponent', () => {
  let component: EditProfileStudentModalComponent;
  let fixture: ComponentFixture<EditProfileStudentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileStudentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
