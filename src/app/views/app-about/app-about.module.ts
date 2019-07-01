import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAboutRoutingModule } from './app-about-routing.module';
import { AppAboutComponent } from './app-about.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AppAboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppAboutRoutingModule
  ]
})
export class AppAboutModule { }
