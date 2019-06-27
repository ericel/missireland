import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDonateRoutingModule } from './app-donate-routing.module';
import { DonateHomeComponent } from './donate-home/donate-home.component';

@NgModule({
  declarations: [DonateHomeComponent],
  imports: [
    CommonModule,
    AppDonateRoutingModule
  ]
})
export class AppDonateModule { }
