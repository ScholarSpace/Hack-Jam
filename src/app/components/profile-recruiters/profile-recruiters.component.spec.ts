import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecruitersComponent } from './profile-recruiters.component';

describe('ProfileRecruitersComponent', () => {
  let component: ProfileRecruitersComponent;
  let fixture: ComponentFixture<ProfileRecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRecruitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
