import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-student',
  templateUrl: './sign-up-student.component.html',
  styleUrls: ['./sign-up-student.component.css']
})
export class SignUpStudentComponent implements OnInit {

  constructor(private route: Router) { }

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
