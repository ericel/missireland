import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserWindowRef, windowProvider, browserWindowProvider } from './services/windows.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AlertService } from './services/alert.service';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentService } from './components/payment-form/payment-service';
import { FormsModule } from '@angular/forms';
import { StripePipe } from './pipes/stripe.pipe';
const appComponents = [
  HeaderComponent,
  FooterComponent,
  ScrollToDirective,
  PaymentFormComponent,
  StripePipe
];
@NgModule({
  declarations: appComponents,
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ],
  exports: appComponents,
  providers: [
    BrowserWindowRef,
    windowProvider,
    browserWindowProvider,
    AlertService,
    PaymentService
  ]
})
export class SharedModule { }
