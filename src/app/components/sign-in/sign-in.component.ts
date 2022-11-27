import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openProfile(){
    if (this.email == 'luke@vossie.net'){
      this.router.navigate(['main-app/student/1/student-profile']);
    } else if (this.email == 'penguinexpress.co@gmail.com') {
      this.router.navigate(['main-app/recruiter/1/recruiter-profile']);
    }
  }

}
