import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileRecruiterModalComponent } from '../modals/edit-profile-recruiter-modal/edit-profile-recruiter-modal.component';
import { SettingsModalComponent } from '../modals/settings-modal/settings-modal.component';

@Component({
  selector: 'app-profile-recruiters',
  templateUrl: './profile-recruiters.component.html',
  styleUrls: ['./profile-recruiters.component.css']
})
export class ProfileRecruitersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditProfileModal() {
    this.dialog.open(EditProfileRecruiterModalComponent);
  }

  openSettingsModal(){
    this.dialog.open(SettingsModalComponent);
  }

}
