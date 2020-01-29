import { Component, OnInit } from '@angular/core';
import { KeyType } from '../model/keyType.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-model-fiche-stats',
  templateUrl: './model-fiche-stats.component.html',
  styleUrls: ['./model-fiche-stats.component.css']
})
export class ModelFicheStatsComponent implements OnInit {

  checked = true;
  selected = 'string';
  label = '';

  keyTypes: KeyType[] = [];

  ngOnInit() {
  }

  ajouter() {
    if ( this.label !== '') {
      const tmp: KeyType = new KeyType();
      tmp.key = this.label;
      tmp.type = this.selected;
      this.keyTypes.push(tmp);
    }
  }

  removePostButton(keyType: KeyType) {
    this.keyTypes = this.keyTypes.filter((value) => {
      return value !== keyType;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keyTypes, event.previousIndex, event.currentIndex);
  }
}
