import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostitComponent } from './postit/postit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DraggableModalComponent} from './modal/draggable-modal.component';
import { FormulairePostItComponent } from './formulaire-post-it/formulaire-post-it.component';
import {FormsModule} from '@angular/forms';
import { TimeLineComponent } from './time-line/time-line.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule, MatToolbarModule} from '@angular/material';
import { CarteComponent } from './carte/carte.component';
import {GenerateurComponent} from './generateur/generateur.component';

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
    DraggableModalComponent,
    FormulairePostItComponent,
    TimeLineComponent,
    NavComponent,
    CarteComponent,
    GenerateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    // MdToolbarModule,
    // MdTabsModule,
    // MdButtonModule,
    // MdInputModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    // MdCheckboxModule,
    // MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DraggableModalComponent]
})
export class AppModule { }
