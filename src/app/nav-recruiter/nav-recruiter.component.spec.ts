import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRecruiterComponent } from './nav-recruiter.component';

describe('NavRecruiterComponent', () => {
  let component: NavRecruiterComponent;
  let fixture: ComponentFixture<NavRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
