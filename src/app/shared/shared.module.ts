import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserWindowRef, windowProvider, browserWindowProvider } from './services/windows.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AlertService } from './services/alert.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripePipe } from './pipes/stripe.pipe';
import { ContactSectionComponent } from '../views/app-home/home-sections/contact-section/contact-section.component';
const appComponents = [
  HeaderComponent,
  FooterComponent,
  ScrollToDirective,
  StripePipe,
  ContactSectionComponent
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
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
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
