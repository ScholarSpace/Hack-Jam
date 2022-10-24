import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifApprovedModalComponent } from '../modals/notif-approved-modal/notif-approved-modal.component';
import { NotifBadgeModalComponent } from '../modals/notif-badge-modal/notif-badge-modal.component';
import { NotifClosedModalComponent } from '../modals/notif-closed-modal/notif-closed-modal.component';
import { NotifDeclinedModalComponent } from '../modals/notif-declined-modal/notif-declined-modal.component';
import { NotifInterviewModalComponent } from '../modals/notif-interview-modal/notif-interview-modal.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openApprovedModal(){
    this.dialog.open(NotifApprovedModalComponent);
  }

  openDeclinedModal(){
    this.dialog.open(NotifDeclinedModalComponent);
  }

  openClosedModal(){
    this.dialog.open(NotifClosedModalComponent);
  }

  openBadgeModal(){
    this.dialog.open(NotifBadgeModalComponent);
  }

  openInterviewModal(){
    this.dialog.open(NotifInterviewModalComponent);
  }

}
