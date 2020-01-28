import { Component, OnInit } from '@angular/core';
import { KeyValue } from '../model/keyValue.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-model-fiche-equipement',
  templateUrl: './model-fiche-equipement.component.html',
  styleUrls: ['./model-fiche-equipement.component.css']
})
export class ModelFicheEquipementComponent implements OnInit {

  checked = true;
  desc: string;
  label: string;

  equipements: KeyValue[] = [];

  ngOnInit() {
  }

  ajouter() {
    const tmp = new KeyValue();
    tmp.key = this.label;
    tmp.value = this.desc;
    this.equipements.push(tmp);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.equipements, event.previousIndex, event.currentIndex);
  }

}
