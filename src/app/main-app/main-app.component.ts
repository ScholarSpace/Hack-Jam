import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MainAppService } from '../services/main-app.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  type = '';

  constructor(private route: ActivatedRoute, service: MainAppService) {
    // Opening corresponding route depending on sign up/sign in
    this.route.params.subscribe( params => this.type= params['type']);
  }

  ngOnInit(): void {
  }

}
