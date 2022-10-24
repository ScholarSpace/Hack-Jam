import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJobPostModalComponent } from './add-edit-job-post-modal.component';

describe('AddEditJobPostModalComponent', () => {
  let component: AddEditJobPostModalComponent;
  let fixture: ComponentFixture<AddEditJobPostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditJobPostModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditJobPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
