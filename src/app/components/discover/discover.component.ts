import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFiltersModalComponent } from '../modals/add-filters-modal/add-filters-modal.component';
import { ViewDetailsModalComponent } from '../modals/view-details-modal/view-details-modal.component';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddFiltersModal() {
    this.dialog.open(AddFiltersModalComponent);
  }

  openViewDetailsModal() {
    this.dialog.open(ViewDetailsModalComponent);
  }

}
