import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-job-post-modal',
  templateUrl: './add-edit-job-post-modal.component.html',
  styleUrls: ['./add-edit-job-post-modal.component.css']
})
export class AddEditJobPostModalComponent implements OnInit {

  industries = [
    'Financial services',
    'Humanities',
    'Humanities and Marketing',
    'Sciences',
    'Biology and Life Sciences',
    'Medicine',
    'Manufacturing',
    'Law Enforcement',
    'Media/Entertainment',
    'Disaster management services',
    'Art',
    'Technology',
    'Military',
    'Travel (Air)',
    'Automobile',
    'Oceanic',
    'Health Care services',
    'Resources',
    'Tourism',
    'Utilities',
    'Waste'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
