import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BoardComponent} from './board/board.component';
import {MultiBordComponent} from './multi-bord/multi-bord.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'board/:dimensions/:x/:y', component: BoardComponent},
  {path: 'boards/:dimensions/:x/:y', component: MultiBordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
