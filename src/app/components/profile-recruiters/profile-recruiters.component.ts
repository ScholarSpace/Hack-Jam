import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainAppComponent } from 'src/app/main-app/main-app.component';
import { MainAppService, Recruiter, Review } from 'src/app/services/main-app.service';
import { EditProfileRecruiterModalComponent } from '../modals/edit-profile-recruiter-modal/edit-profile-recruiter-modal.component';
import { SettingsModalComponent } from '../modals/settings-modal/settings-modal.component';

@Component({
  selector: 'app-profile-recruiters',
  templateUrl: './profile-recruiters.component.html',
  styleUrls: ['./profile-recruiters.component.css']
})
export class ProfileRecruitersComponent implements OnInit {
  rec: Recruiter = {
    companyName: '',
    companyDesc: 'We strive to cultivate professional writers and produce high quality work.',
    email: '',
    estDate: '',
    location: '',
    password: '',
    recType: '',
    reviewID: [''],
    socialMedia: [''],
    verified: false
  };
  reviews: Review[];
  links = ['', 'https://www.instagram.com/penguinexpress.co/', 'https://www.linkedin.com/in/penguin-express-3075b8258/'];
  

  constructor(private dialog: MatDialog, private service: MainAppService) {

  }

  ngOnInit(): void {
    this.service.getRecruiter().subscribe((res: Recruiter) => {
      this.rec = res;
      console.log('Recruiter: ', res);

      this.service.getRecruiterReviews().subscribe((res) => {
        this.reviews = res;
        console.log('Reviews: ', res);
      })
    })
  }

  openEditProfileModal() {
    this.dialog.open(EditProfileRecruiterModalComponent, {data: this.rec});
  }

  openSettingsModal(){
    this.dialog.open(SettingsModalComponent);
  }

}
