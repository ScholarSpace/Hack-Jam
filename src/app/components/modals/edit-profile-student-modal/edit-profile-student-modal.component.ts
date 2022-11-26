import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainAppService, Student } from 'src/app/services/main-app.service';

@Component({
  selector: 'app-edit-profile-student-modal',
  templateUrl: './edit-profile-student-modal.component.html',
  styleUrls: ['./edit-profile-student-modal.component.css']
})
export class EditProfileStudentModalComponent implements OnInit {
  degreeSelect: any;

  constructor(@Inject(MAT_DIALOG_DATA) public user:Student, public service: MainAppService) { }

  ngOnInit(): void {
    // Selecting the degree
    //this.degreeSelect.value = this.user.qualification;
    
  }

}
