import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openProfile(){
    this.router.navigate(['main-app/student/1/student-profile']);
  }

}
