import { Component, OnInit } from '@angular/core';
import { MainAppService, Profile, Student } from 'src/app/services/main-app.service';
import { Course, UpskillingService } from 'src/app/services/upskilling.service';

@Component({
  selector: 'app-upskilling',
  templateUrl: './upskilling.component.html',
  styleUrls: ['./upskilling.component.css']
})
export class UpskillingComponent implements OnInit {
  topics: string[];
  user = {} as Student;
  openTopicCourses: Course[];
  stringCompletedCourses = ['71T3RRIexX0Q33yFNoxs',' WpFStOaP1EYo7oQZucpy','qua3M37zawIM9K9lvLg2'];
  completedCourses: Course[] = [{badgeSupplier: '', badgeTitle: '', courseDesc: '', courseText: '', courseTitle: '', id: '', quizeText: '', topics: ''}];

  constructor(private service: UpskillingService, private mainservice: MainAppService) {
    this.getUser();
  }

  ngOnInit(): void {
    this.topics = this.service.topics;
    this.setOpenTopic(this.topics[0]);
    this.getCompletedCourses();

  }

  setOpenTopic(topic:string){
    this.service.getCourses(topic).subscribe((res) => {
      console.log('Courses for Microsoft Office: ', res);
      this.openTopicCourses = res;
    });
  }

  getUser(){
    this.mainservice.getStudent('3uD2P184ZO11vclKixzX').subscribe((res) => {
      console.log('User:', res);
      this.user = res;
    })
  }

  getCompletedCourses(){
    this.service.getCompletedCourses(this.stringCompletedCourses).subscribe((res) => {
      console.log('Completed Courses', res);
      this.completedCourses = res;
    })
  }

}
