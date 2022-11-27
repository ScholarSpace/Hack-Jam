import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/services/discover.service';
import { MainAppService } from 'src/app/services/main-app.service';
import { JobsComponent } from '../jobs/jobs.component';
import { WriteReviewModalComponent } from '../modals/write-review-modal/write-review-modal.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  jobID: string;
  selectedJob: Job;
  status: string;
  activeText: string;

  constructor(private dialog: MatDialog, private jobsPage: JobsComponent, private actRoute: ActivatedRoute, private service: MainAppService) { }

  ngOnInit(): void {
    this.jobID = this.actRoute.snapshot.params['jobId'];
    console.log(this.jobID);

    this.service.getSingleJob(this.jobID).subscribe((res: Job[]) => {
      console.log('Received Job: ', res[0]);
      this.selectedJob = res[0];
      this.status = res[0]['active?'];
      console.log('Status: ', this.status);
    })    
  }

  openWriteReviewModal() {
    this.dialog.open(WriteReviewModalComponent);
  }
}
