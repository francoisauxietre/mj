import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostitComponent } from './postit/postit.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormulairePostItComponent } from './formulaire-post-it/formulaire-post-it.component';
import { FormsModule } from '@angular/forms';
import { TimeLineComponent } from './time-line/time-line.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule, MatFormFieldModule,
  MatInputModule, MatToolbarModule, MatButtonModule,
  MatExpansionModule, MatListModule, MatCardModule, MatDividerModule } from '@angular/material';
import { CarteComponent } from './carte/carte.component';
import { GenerateurComponent } from './generateur/generateur.component';
import { ElementTimeLineComponent } from './element-time-line/element-time-line.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MusicComponent } from './music/music.component';
import { EyeComponent } from './eye/eye.component';
import { ParametersComponent } from './parameters/parameters.component';
import { SaveComponent } from './save/save.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { PlayersComponent } from './players/players.component';
import { HelpComponent } from './help/help.component';
import { ModelFicheComponent, ModelFicheModalComponent } from './model-fiche/model-fiche.component';
import { ModelFicheInfoComponent } from './model-fiche-info/model-fiche-info.component';
import { ModelFicheStatsComponent } from './model-fiche-stats/model-fiche-stats.component';
import { ModelFicheEquipementComponent } from './model-fiche-equipement/model-fiche-equipement.component';
import { ModelFicheInventaireComponent } from './model-fiche-inventaire/model-fiche-inventaire.component';

import { MatDialogModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

// import {
//   // MdToolbarModule,
//   // MdTabsModule,
//   // MdButtonModule,
//   // MdInputModule,
//   // MdDatepickerModule,
//   // MdNativeDateModule,
//   // MdCheckboxModule,
//   // MdRadioModule
// } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostitComponent,
    FormulairePostItComponent,
    TimeLineComponent,
    NavComponent,
    CarteComponent,
    GenerateurComponent,
    ElementTimeLineComponent,
    MusicComponent,
    EyeComponent,
    ParametersComponent,
    SaveComponent,
    InitiativeComponent,
    PlayersComponent,
    HelpComponent,
    ModelFicheComponent,
    ModelFicheInfoComponent,
    ModelFicheStatsComponent,
    ModelFicheEquipementComponent,
    ModelFicheInventaireComponent,
    ModelFicheModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatDividerModule
    // MdToolbarModule,
    // MdTabsModule,
    // MdButtonModule,
    // MdInputModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    // MdCheckboxModule,
    // MdRadioModule
  ],
  providers: [ModelFicheModalComponent],
  bootstrap: [AppComponent],
  entryComponents: [ModelFicheModalComponent]
})
export class AppModule { }
