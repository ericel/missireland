import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRegisterComponent } from './app-register.component';

const routes: Routes = [
  {
    path: '',
    component: AppRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRegisterRoutingModule { }
