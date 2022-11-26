import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Interest, InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: Interest[];

  constructor(private router: Router, private service: InterestService) { }

  ngOnInit(): void {
    this.getInterests()
  }

  openProfile(){
    this.router.navigate(['main-app/student/1/student-profile']);
  }

  getInterests(){
    this.service.getInterests().subscribe((res) => {
      this.interests = res;
      console.log('Interests: ', this.interests)
    })
  }

}
