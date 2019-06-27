import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateHomeComponent } from './donate-home/donate-home.component';

const routes: Routes = [
  {
    path: '',
    component: DonateHomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDonateRoutingModule { }
