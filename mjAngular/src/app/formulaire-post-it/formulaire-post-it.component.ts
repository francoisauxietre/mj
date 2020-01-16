import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-post-it',
  templateUrl: './formulaire-post-it.component.html',
  styleUrls: ['./formulaire-post-it.component.css']
})
export class FormulairePostItComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any) {
    console.log(value);
  }
}
