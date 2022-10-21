import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileStudentModalComponent } from '../modals/edit-profile-student-modal/edit-profile-student-modal.component';
import { UploadCvModalComponent } from '../modals/upload-cv-modal/upload-cv-modal.component';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openEditProfileModal(){
    this.dialog.open(EditProfileStudentModalComponent);
  }

  openUploadCVModal(){
    this.dialog.open(UploadCvModalComponent);
  }

}
