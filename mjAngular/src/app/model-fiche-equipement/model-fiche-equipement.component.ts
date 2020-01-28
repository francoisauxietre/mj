import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-fiche-equipement',
  templateUrl: './model-fiche-equipement.component.html',
  styleUrls: ['./model-fiche-equipement.component.css']
})
export class ModelFicheEquipementComponent implements OnInit {

  checked = true;
  selected = 'string';
  label: string;

  ngOnInit() {
  }

  ajouter() {

  }

}
