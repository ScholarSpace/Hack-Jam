import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recruiter } from 'src/app/services/main-app.service';
import { ProfileRecruitersComponent } from '../../profile-recruiters/profile-recruiters.component';

@Component({
  selector: 'app-edit-profile-recruiter-modal',
  templateUrl: './edit-profile-recruiter-modal.component.html',
  styleUrls: ['./edit-profile-recruiter-modal.component.css']
})
export class EditProfileRecruiterModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public user:Recruiter, public rec: ProfileRecruitersComponent) { }

  ngOnInit(): void {
  }

}
