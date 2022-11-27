import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiscoverService, Job } from 'src/app/services/discover.service';
import { MainAppService, Student } from 'src/app/services/main-app.service';
import { AddFiltersModalComponent } from '../modals/add-filters-modal/add-filters-modal.component';
import { ViewDetailsModalComponent } from '../modals/view-details-modal/view-details-modal.component';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  jobs: any = [];
  searchTerm: string;
  user: Student;
  filters = {location: 'Cape Town',
             payRateFrom: 50,
             payRateTo: 100,
             duration: '1-3 months',
             jobType: 'Full-time'}
  savedJobs: Job[] = [{status : '',
    id: '',
    industry : '',
    jobDesc : '',
    jobDuration : '',
    jobLocation : '',
    jobPayRate : 0,
    jobPostDate : new Date('2000-01-01'),
    jobTitle : '',
    jobType : '',
    recID : ''
  }];
  saveState = 'vector57.svg';

  constructor(private dialog: MatDialog, private service: DiscoverService,private mainservice: MainAppService) { }
 
  ngOnInit() {
    this.getAllJobs()
    this.getUser();
  }

  getAllJobs(){
    this.service.getJobs().subscribe((res: Job[]) => {
      console.log(res)
      this.jobs = res
    })
  }

  getUser(){
    return this.mainservice.getStudent('3uD2P184ZO11vclKixzX').subscribe((res: Student) => {
      console.log('User: ', res);
      this.user = res;
    })
  }

  changeState(){
    if (this.saveState == 'vector57.svg'){
      this.saveState = 'discover_jobs.svg';
      this.getSavedJobs();
      this.jobs = this.savedJobs;
    } else {
      this.saveState = 'vector57.svg';
      this.getAllJobs();
    }
    console.log('State changed: ', this.saveState);
  }

  getSavedJobs(){
    this.mainservice.getSavedJobs(this.user.savedJobs).subscribe((res: Job[]) =>{
      console.log('Saved Jobs:', res);
      this.savedJobs = res;
    })
  }

  searchJobs(){
    if (this.searchTerm == ''){
      this.getAllJobs();
    } else {
      this.service.searchJobs(this.searchTerm).subscribe((res: Job[]) => {
        console.log('Searching for ', this.searchTerm, ' Found: ', res);
        this.jobs = res;
      })
    }
  }

  openAddFiltersModal() {
    this.dialog.open(AddFiltersModalComponent);
  }

  openViewDetailsModal(job: Job) {
    this.dialog.open(ViewDetailsModalComponent, {data: job});
  }
}


export interface Filters{
  location: string,
  payRateFrom: number,
  payRateTo: number,
  duration: string,
  jobType: string
}
