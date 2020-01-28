import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public listeCarte: any = [{value: 'carte1.jpg', name: 'carte 1'},
    {value: 'carte2.jpeg', name: 'carte 2'}];
  cheminImage: any = '';

  constructor() { }

  ngOnInit() {
    this.cheminImage = '../assets/Images/' + this.listeCarte[0].value;
  }

  changeImage(selectedValue: string) {
    this.cheminImage = '../assets/Images/' + selectedValue;
  }

}
