import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProjectModalComponent } from '../modals/add-edit-project-modal/add-edit-project-modal.component';
import { EditProfileStudentModalComponent } from '../modals/edit-profile-student-modal/edit-profile-student-modal.component';
import { SettingsModalComponent } from '../modals/settings-modal/settings-modal.component';
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

  openSettingsModal(){
    this.dialog.open(SettingsModalComponent);
  }

  openAddEditProjectModal() {
    this.dialog.open(AddEditProjectModalComponent);
  }

}
