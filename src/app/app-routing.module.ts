import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/app-home/app-home.module#AppHomeModule',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    loadChildren: './views/app-shop/app-shop.module#AppShopModule',
    pathMatch: 'full'
  },
  {
    path: 'donate',
    loadChildren: './views/app-donate/app-donate.module#AppDonateModule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
