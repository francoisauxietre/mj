import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TimeLineComponent} from './time-line/time-line.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'timeline', component: TimeLineComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
