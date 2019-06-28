import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDonateRoutingModule } from './app-donate-routing.module';
import { DonateHomeComponent } from './donate-home/donate-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DonateHomeComponent],
  imports: [
    CommonModule,
    AppDonateRoutingModule,
    SharedModule
  ]
})
export class AppDonateModule { }
