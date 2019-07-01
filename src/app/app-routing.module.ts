import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/app-home/app-home.module#AppHomeModule',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: './views/app-register/app-register.module#AppRegisterModule',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './views/app-about/app-about.module#AppAboutModule',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: './views/app-contact/app-contact.module#AppContactModule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
