import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {PostitComponent} from './postit/postit.component';
import {CarteComponent} from './carte/carte.component';
import {GenerateurComponent} from './generateur/generateur.component';
import { ModelFicheComponent } from './model-fiche/model-fiche.component';

const routes: Routes = [
  {path: 'timeLine', component: TimeLineComponent},
  {path: 'postIt', component: PostitComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'generateur', component: GenerateurComponent},
  {path: 'modelFiche', component: ModelFicheComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
