import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostitComponent } from './postit/postit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DraggableModalComponent} from './modal/draggable-modal.component';
import { FormulairePostItComponent } from './formulaire-post-it/formulaire-post-it.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostitComponent,
    DraggableModalComponent,
    FormulairePostItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DraggableModalComponent]
})
export class AppModule { }
