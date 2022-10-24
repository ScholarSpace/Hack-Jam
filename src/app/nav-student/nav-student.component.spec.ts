import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStudentComponent } from './nav-student.component';

describe('NavStudentComponent', () => {
  let component: NavStudentComponent;
  let fixture: ComponentFixture<NavStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
