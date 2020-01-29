import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generateur',
  templateUrl: './generateur.component.html',
  styleUrls: ['./generateur.component.css']
})
export class GenerateurComponent implements OnInit {

  listDe = [4, 6, 8, 10, 12, 20, 100, 'Autre'];
  total: number;
  selectDe: number;
  nbDe = 1;
  listValue = '';
  listValueSorted = [];

  constructor() {

   }

  ngOnInit() {
  }

  onSubmit() {

    this.listValue = '';
    this.listValueSorted = [];
    if (this.nbDe != null && this.selectDe != null) {
      if (!isNaN(this.selectDe)) {
        let i = this.nbDe;
        this.total = 0;
        this.listValue = '';
        while (i > 0) {
          const value = (Math.floor(Math.random() * this.selectDe) + 1);
          this.listValueSorted.push(value);
          this.total = this.total + value;
          i--;
        }
        this.listValueSorted.sort((a, b) => a - b );
        this.listValueSorted.forEach(element => this.listValue += '[' + element.toString() + '] ');
      } else {
        const num = window.prompt('Entrez une valeur de dé personnalisée:');
        if (num === '') {
          window.alert('Veuillez choisir une taille de dé');
        } else {
          this.listDe.pop();
          this.listDe.push(num);
          this.listDe.push('Autre');
        }
      }
    } else {
      window.alert('Veuillez choisir une taille de dé');
    }

  }

}
