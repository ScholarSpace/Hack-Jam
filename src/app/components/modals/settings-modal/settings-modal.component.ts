import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportIssuesModalComponent } from '../report-issues-modal/report-issues-modal.component';
import { SecurityModalComponent } from '../security-modal/security-modal.component';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSecurityModal() {
    this.dialog.open(SecurityModalComponent);
  }

  openReportIssueModal(){
    this.dialog.open(ReportIssuesModalComponent);
  }

}
