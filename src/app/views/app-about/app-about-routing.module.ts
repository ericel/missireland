import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent } from './app-about.component';

const routes: Routes = [
  {
    path: '',
    component: AppAboutComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAboutRoutingModule { }
