import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-model-fiche-inventaire',
  templateUrl: './model-fiche-inventaire.component.html',
  styleUrls: ['./model-fiche-inventaire.component.css']
})
export class ModelFicheInventaireComponent implements OnInit {

  checked = true;
  selected = 'string';
  label: string;
  nb: number;
  desc: string;

  inventaire: Item[] = [];

  ngOnInit() {
  }

  ajouter() {
    const tmp = new Item();
    tmp.nom = this.label;
    tmp.desc = this.desc;
    tmp.nb = this.nb;
    this.inventaire.push(tmp);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inventaire, event.previousIndex, event.currentIndex);
  }
}
