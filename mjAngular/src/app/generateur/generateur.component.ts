import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateur',
  templateUrl: './generateur.component.html',
  styleUrls: ['./generateur.component.css']
})
export class GenerateurComponent implements OnInit {

  listDe = [4,6,8,10,12,20,100];
  total: number;
  selectDe: number;
  nbDe: number;
  listValue : String ="";

  constructor() {

   }

  ngOnInit() {
  }

  onSubmit(){

    if(this.nbDe!=null && this.selectDe!=null){
      let i = this.nbDe;
      this.total = 0;
      this.listValue = "";
      while(i>0){
        let value = (Math.floor(Math.random()*this.selectDe)+1);
        this.total = this.total + value;
        this.listValue += "[" + value.toString() + "] ";
        i--;
      }
    } else {
      //TODO Message d'erreur
    }

  }

}
