import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCvModalComponent } from './upload-cv-modal.component';

describe('UploadCvModalComponent', () => {
  let component: UploadCvModalComponent;
  let fixture: ComponentFixture<UploadCvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCvModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
