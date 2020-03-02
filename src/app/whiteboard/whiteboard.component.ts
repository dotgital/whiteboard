import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {

  public stats = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const thisMonth = `${year}${month}`;
    // const thisMonth = '201908';

    this.dataService.getStats(thisMonth).subscribe(res => {
      this.stats = res;
      console.log(res);
    });
  }
}
