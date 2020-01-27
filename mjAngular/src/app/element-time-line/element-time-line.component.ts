import {Component, Input, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeLine';
import {SubTask} from '../model/subTask';
import {AppData} from '../model/appData';

@Component({
  selector: 'app-element-time-line',
  templateUrl: './element-time-line.component.html',
  styleUrls: ['./element-time-line.component.css']
})
export class ElementTimeLineComponent implements OnInit {
  @Input() entryInput: ElementTimeLine;
  public change: boolean;
  public subTasks: SubTask[] = [];
  public Ids: number[] = null;
  public courantId = 0;
  public showTask: boolean;
  // @ts-ignore
  data = new AppData('');

  ngOnInit(): void {
    console.log('debut element time-line');
    this.showTask = false;
  }

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

  addSubTask() {
    this.showTask = true;
    this.courantId++;
    const subTask: SubTask = new SubTask();
    subTask.description = 'ets';
    subTask.id = this.courantId;
    subTask.show = true;
    this.subTasks.push(subTask);
  }
  validateTask() {
    this.change = false;
  }
}
