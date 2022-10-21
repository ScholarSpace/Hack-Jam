import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewModalComponent } from './write-review-modal.component';

describe('WriteReviewModalComponent', () => {
  let component: WriteReviewModalComponent;
  let fixture: ComponentFixture<WriteReviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteReviewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
