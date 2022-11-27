import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainAppService } from 'src/app/services/main-app.service';

@Component({
  selector: 'app-sign-up-student',
  templateUrl: './sign-up-student.component.html',
  styleUrls: ['./sign-up-student.component.css']
})
export class SignUpStudentComponent implements OnInit {
  degrees: string[];

  constructor(private route: Router, private service:  MainAppService) {
    this.degrees = service.degrees;
  }

  ngOnInit(): void {
  }

  uploadPicture() {
    // Upload an image of the user
  }

  signUpUser() {
    // Add the user to the database the nagivate to the user's profile

    this.route.navigate(['main-app/student/1/interests']);
  }

}
