import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContactRoutingModule } from './app-contact-routing.module';
import { AppContactComponent } from './app-contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactSectionComponent } from '../app-home/home-sections/contact-section/contact-section.component';

@NgModule({
  declarations: [AppContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppContactRoutingModule
  ]
})
export class AppContactModule { }
