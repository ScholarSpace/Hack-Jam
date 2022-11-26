import { Component, OnInit } from '@angular/core';
import { MainAppService, Profile } from 'src/app/services/main-app.service';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  profiles: Profile[];

  constructor(private service: MainAppService) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(){
    this.service.getProfiles('3uD2P184ZO11vclKixzX').subscribe((res) => {
      this.profiles = res;
    });
  }

}
