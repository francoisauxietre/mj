import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {PostitComponent} from './postit/postit.component';

const routes: Routes = [
  {path: 'timeLine', component: TimeLineComponent},
  {path: 'postIt', component: PostitComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
