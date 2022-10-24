import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditJobPostModalComponent } from '../modals/add-edit-job-post-modal/add-edit-job-post-modal.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddEditJobPostModal() {
    this.dialog.open(AddEditJobPostModalComponent)
  }

}
