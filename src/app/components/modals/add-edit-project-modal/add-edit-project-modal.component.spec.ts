import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectModalComponent } from './add-edit-project-modal.component';

describe('AddEditProjectModalComponent', () => {
  let component: AddEditProjectModalComponent;
  let fixture: ComponentFixture<AddEditProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProjectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
