import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-fiche-info',
  templateUrl: './model-fiche-info.component.html',
  styleUrls: ['./model-fiche-info.component.css']
})
export class ModelFicheInfoComponent implements OnInit {

  checked = true;
  selected = 'string';
  label: string;

  ngOnInit() {
  }

  ajouter() {

  }

}
