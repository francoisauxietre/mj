import {Component, Input, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeLine';
import {element} from 'protractor';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }
  numberEntries = 0;
  alternate: true;
  toggle: true;
  color: false;
  size: 40;
  side = 'left';

  // @Input() entry: ElementTimeLine;
  entries: ElementTimeLine[] = [];

  ngOnInit(): void {
    console.log('test');
  }

  addEntry() {
    this.numberEntries++;
    const entry = {header: '', description: '', show: true};
    // this.entry = element1;
    this.entries.push(entry);
  }

  removeEntry() {
    if (this.numberEntries > 0) {
      this.numberEntries--;
    }
    this.entries.pop();
  }


}
