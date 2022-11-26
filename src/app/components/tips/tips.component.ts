import { Component, OnInit } from '@angular/core';
import { Tip, TipsService } from 'src/app/services/tips.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tips: Tip[]

  constructor(private service: TipsService) { }

  ngOnInit(): void {
    this.getTips();
  }

  getTips(){
    this.service.getTips().subscribe((res) => {
      console.log('Tips: ', res)
      this.tips = res;
    })
  }


}
