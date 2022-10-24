import { Component, OnInit } from '@angular/core';
import { UpskillingService } from 'src/app/services/upskilling.service';

@Component({
  selector: 'app-upskilling',
  templateUrl: './upskilling.component.html',
  styleUrls: ['./upskilling.component.css']
})
export class UpskillingComponent implements OnInit {
  topics: any;
  openTopic: any;

  constructor(private upskillData: UpskillingService) {
    this.topics = upskillData.getTopics();
    this.openTopic = this.topics[0];
  }

  ngOnInit(): void {
  }

  setOpenTopic(topic:string){
    this.openTopic = this.topics[this.topics.findIndex((n: { name: string; }) => n.name == topic)];
  }

}
