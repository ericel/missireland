import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContactComponent } from './app-contact.component';

const routes: Routes = [
  {
    path: '',
    component: AppContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContactRoutingModule { }
