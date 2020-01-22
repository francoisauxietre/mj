import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit{

  constructor() { }
  nunmberEntries = 0;
  alternate: true;
  toggle: true;
  color: false;
  size: 40;
  show: boolean = false;
  side = 'left';

  entries = [
    {
      header: 'header',
      content: 'content',
      number: 'number'
    }
  ]

  ngOnInit(): void {
    console.log('test');
  }

  addEntry() {
    this.nunmberEntries++;
    this.entries.push({
      header: 'header',
      content: 'content',
      number: this.nunmberEntries.toString()
    });
  }

  removeEntry() {
    if (this.nunmberEntries > 0) {
      this.nunmberEntries--;
    }
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.show) {
        this.show = true;
        event.stopPropagation();
      } else {
        this.show = false;
    }

    console.log('expension');
  }

  onDotClick(event) {
    if (!this.show) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

}
