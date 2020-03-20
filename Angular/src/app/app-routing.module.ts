import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialBodyComponent } from './initial-body/initial-body.component';
import { SetPersonComponent } from './set-person/set-person.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  { path: '', component: InitialBodyComponent },
  { path: 'addPerson', component: SetPersonComponent },
  { path: 'start', component: StartGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
