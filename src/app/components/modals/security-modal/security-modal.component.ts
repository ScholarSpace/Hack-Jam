import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePassModalComponent } from '../change-pass-modal/change-pass-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';

@Component({
  selector: 'app-security-modal',
  templateUrl: './security-modal.component.html',
  styleUrls: ['./security-modal.component.css']
})
export class SecurityModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openChangePassModal(){
    this.dialog.open(ChangePassModalComponent);
  }

  openDeleteAccountModal(){
    this.dialog.open(DeleteAccountModalComponent);
  }

}
