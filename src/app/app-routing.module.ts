import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { StartComponent } from './pages/start/start.component';
import { BuilderComponent } from './pages/builder/builder.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'builder', component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
