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
  desc = '';
  label = '';

  equipements: KeyValue[] = [];

  ngOnInit() {
  }

  ajouter() {
    if ( this.desc !== '' || this.label !== '' ) {
      const tmp = new KeyValue();
      tmp.key = this.label;
      tmp.value = this.desc;
      this.equipements.push(tmp);
    }
  }

  removePostButton(equipement: KeyValue) {
    this.equipements = this.equipements.filter((value) => {
      return value !== equipement;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.equipements, event.previousIndex, event.currentIndex);
  }

}
