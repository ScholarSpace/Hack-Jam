import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoverLetterComponent } from '../../cover-letter/cover-letter.component';

@Component({
  selector: 'app-view-details-modal',
  templateUrl: './view-details-modal.component.html',
  styleUrls: ['./view-details-modal.component.css']
})
export class ViewDetailsModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCoverLetterModal(){
    this.dialog.open(CoverLetterComponent);
  }

}
