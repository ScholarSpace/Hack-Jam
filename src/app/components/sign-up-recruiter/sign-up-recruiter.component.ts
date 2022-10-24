import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-recruiter',
  templateUrl: './sign-up-recruiter.component.html',
  styleUrls: ['./sign-up-recruiter.component.css']
})
export class SignUpRecruiterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  uploadPicture() {
    //Upload a picture of the user
  }

  signUpUser() {
    // Add the user to the database the nagivate to the user's profile

    this.route.navigate(['main-app/recruiter/1/recruiter-profile']);
  }

}
