import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFiltersModalComponent } from './add-filters-modal.component';

describe('AddFiltersModalComponent', () => {
  let component: AddFiltersModalComponent;
  let fixture: ComponentFixture<AddFiltersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFiltersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
