import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRegisterRoutingModule } from './app-register-routing.module';
import { AppRegisterComponent } from './app-register.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AppRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRegisterRoutingModule
  ]
})
export class AppRegisterModule { }
