import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpskillingService {

  private _topics = [
    {name: 'Microsoft Office',
    courses: [
      {name: 'Beginners course in Word', desc: 'Learn the basics of Microsoft Word 365!', completed: false},
      {name: 'Beginners course in Excel', desc: 'Learn the basics of Microsoft Excel 365!', completed: true},
      {name: 'Beginners course in PowerPoint', desc: 'Learn the basics of Microsoft PowerPoint 365!', completed: true}
    ]},
    {name: 'Writing',
    courses: [
      {name: 'Beginners course in LateX', desc: 'Learn how to create formal documents for the business environment.', completed: true},
    ]},
  ]

  constructor() { }

  getTopics(){
    return this._topics;
  }
}
