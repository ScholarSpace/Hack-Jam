import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Job } from 'src/app/services/discover.service';
import { MainAppService } from 'src/app/services/main-app.service';
import { AddEditJobPostModalComponent } from '../modals/add-edit-job-post-modal/add-edit-job-post-modal.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];
  activeActive = true;
  postedActive = false;
  closedActive = false;
  jobString = 'Active Jobs';
  selectedJob: Job;

  constructor(private dialog: MatDialog, private service: MainAppService) { }

  ngOnInit(): void {
    this.getJobs('active');
  }

  getJobs(type: string){
    this.service.getJobs(type).subscribe((res) => {
      console.log('Jobs: ', res);
      this.jobs = res;
    })
  }

  openAddEditJobPostModal() {
    this.dialog.open(AddEditJobPostModalComponent)
  }

  setSelectedJob(job: Job){
    this.selectedJob = job;
    console.log('Updated selected job: ', this.selectedJob);
  }

  changeJobType(type: string){
    if (type == 'active'){
      this.jobString = "Active Jobs";
      this.activeActive = true;
      this.postedActive = false;
      this.closedActive = false;
    } else if (type == 'posted'){
      this.jobString = "Posted Jobs";
      this.postedActive = true;
      this.activeActive = false;
      this.closedActive = false;
    } else if (type == 'closed') {
      this.jobString = "Closed Jobs";
      this.closedActive = true;
      this.activeActive = false;
      this.postedActive = false;
    }
    this.getJobs(type);
  }

}
