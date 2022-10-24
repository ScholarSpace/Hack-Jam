import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WriteReviewModalComponent } from '../modals/write-review-modal/write-review-modal.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWriteReviewModal() {
    this.dialog.open(WriteReviewModalComponent);
  }

}
