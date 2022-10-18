import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpskillingComponent } from './upskilling.component';

describe('UpskillingComponent', () => {
  let component: UpskillingComponent;
  let fixture: ComponentFixture<UpskillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpskillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpskillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
