import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  cheminImage: any = '../assets/Images/gantt1.png';

  constructor() { }

  ngOnInit() {
  }

}
