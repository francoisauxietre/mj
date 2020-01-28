import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-fiche-stats',
  templateUrl: './model-fiche-stats.component.html',
  styleUrls: ['./model-fiche-stats.component.css']
})
export class ModelFicheStatsComponent implements OnInit {

  checked = true;
  selected = 'string';
  label: string;

  ngOnInit() {
  }

}
