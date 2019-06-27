import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShopRoutingModule } from './app-shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShopHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppShopRoutingModule
  ]
})
export class AppShopModule { }
