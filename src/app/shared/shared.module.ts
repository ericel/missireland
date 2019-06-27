import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserWindowRef, windowProvider, browserWindowProvider } from './services/windows.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AlertService } from './services/alert.service';
const appComponents = [
  HeaderComponent,
  FooterComponent,
  ScrollToDirective
];
@NgModule({
  declarations: appComponents,
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  exports: appComponents,
  providers: [
    BrowserWindowRef,
    windowProvider,
    browserWindowProvider,
    AlertService
  ]
})
export class SharedModule { }
