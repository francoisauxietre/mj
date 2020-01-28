import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-model-fiche',
  templateUrl: './model-fiche.component.html',
  styleUrls: ['./model-fiche.component.css']
})
export class ModelFicheComponent implements OnInit {



  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  openModal() {
    this.dialog.open(ModelFicheModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'app-model-fiche-modal',
  templateUrl: 'model-fiche-modal.html',
})
export class ModelFicheModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
