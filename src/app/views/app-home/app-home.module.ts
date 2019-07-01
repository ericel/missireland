import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { AppHomeComponent } from './app-home.component';
import { ImageslideshowCarouselComponent } from './home-sections/imageslideshow-carousel/imageslideshow-carousel.component';

// Required For Template
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutSectionComponent } from './home-sections/about-section/about-section.component';
import { ServicesSectionComponent } from './home-sections/services-section/services-section.component';
import { PurchaseSectionComponent } from './home-sections/purchase-section/purchase-section.component';
import { AvailableonSectionComponent } from './home-sections/availableon-section/availableon-section.component';
import { ContactSectionComponent } from './home-sections/contact-section/contact-section.component';
import { TestimonialsSectionComponent } from './home-sections/testimonials-section/testimonials-section.component';
import { HomeGalleryComponent } from './home-sections/home-gallery/home-gallery.component';


@NgModule({
  declarations: [
    AppHomeComponent,
    ImageslideshowCarouselComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    PurchaseSectionComponent,
    AvailableonSectionComponent,
    ContactSectionComponent,
    TestimonialsSectionComponent,
    HomeGalleryComponent
  ],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    FlexLayoutModule,
    NguCarouselModule,
    NgwWowModule
  ]
})
export class AppHomeModule { }
