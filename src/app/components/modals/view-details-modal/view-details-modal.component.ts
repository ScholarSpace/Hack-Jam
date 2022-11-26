import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoverLetterComponent } from '../../cover-letter/cover-letter.component';

@Component({
  selector: 'app-view-details-modal',
  templateUrl: './view-details-modal.component.html',
  styleUrls: ['./view-details-modal.component.css']
})
export class ViewDetailsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public job:any, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCoverLetterModal(job: any){
    this.dialog.open(CoverLetterComponent, {data: job});
  }

}
