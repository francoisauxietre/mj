import {Component, Input, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeLine';

@Component({
  selector: 'app-element-time-line',
  templateUrl: './element-time-line.component.html',
  styleUrls: ['./element-time-line.component.css']
})
export class ElementTimeLineComponent {

  @Input() entryInput: ElementTimeLine;
  public change: boolean;

  onExpandEntry(expanded, index) {
  }

  onHeaderClick(event) {
    console.log('expension');
  }

  modify() {
    this.change = true;
  }

  validate() {
    this.change = false;
  }
}
