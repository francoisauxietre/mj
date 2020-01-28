import { Component, OnInit } from '@angular/core';
import { KeyValue } from '../model/keyValue.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-model-fiche-info',
  templateUrl: './model-fiche-info.component.html',
  styleUrls: ['./model-fiche-info.component.css']
})
export class ModelFicheInfoComponent implements OnInit {

  checked = true;
  valeur: string;
  label: string;

  keyValues: KeyValue[] = [];

  ngOnInit() {
  }

  ajouter() {
    const tmp = new KeyValue();
    tmp.key = this.label;
    tmp.value = this.valeur;
    this.keyValues.push(tmp);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keyValues, event.previousIndex, event.currentIndex);
  }

}
