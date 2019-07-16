import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
@NgModule({
  imports: [
    AppModule,
    FlexLayoutServerModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
