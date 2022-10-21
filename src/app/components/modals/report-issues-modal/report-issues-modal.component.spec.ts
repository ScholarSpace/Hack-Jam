import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIssuesModalComponent } from './report-issues-modal.component';

describe('ReportIssuesModalComponent', () => {
  let component: ReportIssuesModalComponent;
  let fixture: ComponentFixture<ReportIssuesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportIssuesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportIssuesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
