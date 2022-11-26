import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review, Student } from 'src/app/services/main-app.service';
import { AddEditProjectModalComponent } from '../modals/add-edit-project-modal/add-edit-project-modal.component';
import { EditProfileStudentModalComponent } from '../modals/edit-profile-student-modal/edit-profile-student-modal.component';
import { SettingsModalComponent } from '../modals/settings-modal/settings-modal.component';
import { UploadCvModalComponent } from '../modals/upload-cv-modal/upload-cv-modal.component';
import { Profile } from 'src/app/services/main-app.service';
import { MainAppService } from 'src/app/services/main-app.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { Course, UpskillingService } from 'src/app/services/upskilling.service';
import { UpskillingComponent } from '../upskilling/upskilling.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  user: Student;
  profiles : Profile[];
  reviews: Review[];
  completedCourses: Course[];
  reviewsLoaded: Promise<boolean> = Promise.resolve(false);
  selectModel: string;
  activeProfile: Profile = {profileDesc: '', profileTitle: '', projectDesc: [], projectText: [], projectTitle: [], studentID: ''};
  stringCompletedCourses = ['71T3RRIexX0Q33yFNoxs',' WpFStOaP1EYo7oQZucpy','qua3M37zawIM9K9lvLg2'];

  constructor(private dialog: MatDialog, private service: MainAppService, private upskillService: UpskillingService, private route: Router) {
  }

  ngOnInit() {
    this.getUser();
    this.getProfiles();
    this.getReviews();
    this.getCompletedCourses();
  }

  getUser(){
    return this.service.getStudent('3uD2P184ZO11vclKixzX').subscribe((res: Student) => {
      console.log('User: ', res);
      this.user = res;
    })
  }

  getProfiles(){
    this.service.getProfiles('3uD2P184ZO11vclKixzX').subscribe((res: Profile[]) => {
      console.log('Profiles: ', res);
      this.profiles = res
    })
  }

  getReviews(){
    this.service.getReviews('3uD2P184ZO11vclKixzX').subscribe((res: Review[]) => {
      console.log('Reviews: ', res);
      this.reviews = res;
      this.reviewsLoaded = Promise.resolve(true);
    })
  }
  
  changeProfile(){
    this.activeProfile = this.profiles.find(obj => {
      return obj.profileTitle == this.selectModel;
    })
    console.log(this.activeProfile);
  }

  getCompletedCourses(){
    this.upskillService.getCompletedCourses(this.stringCompletedCourses).subscribe((res) => {
      this.completedCourses = res;
      console.log('Completed Courses: ', this.completedCourses);
    })
  }

  openEditProfileModal(profile: Student){
    this.dialog.open(EditProfileStudentModalComponent, {data: profile});
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

  openInterests(){
    this.route.navigate(['main-app/student/1/interests']);
  }

  counter(i: number){
    return new Array(i);
  }

}
