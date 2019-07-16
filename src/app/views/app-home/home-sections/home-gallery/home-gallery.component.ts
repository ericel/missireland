import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from 'src/app/shared/animations/slider.animations';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styles: [
    `
    .gallery img{
      max-height: 350px !important;
    }
    `
  ],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGalleryComponent implements OnInit {
  public carouselOptions: NguCarouselConfig;
  public slidesImages = [
    'assets/images/slides/slide1-slides/slide1.jpg',
    'assets/images/slides/slide1-slides/slide2.jpg',
    'assets/images/slides/slide1-slides/slide3.jpg',
    'assets/images/slides/slide1-slides/slide4.jpg',
    'assets/images/slides/slide1-slides/slide5.jpg',
    'assets/images/slides/slide1-slides/slide6.jpg',
    'assets/images/slides/slide1-slides/slide7.jpg',
    'assets/images/slides/slide1-slides/slide8.jpg',
    'assets/images/slides/slide1-slides/slide9.jpg',
    'assets/images/slides/slide1-slides/slide10.jpg',
    'assets/images/slides/slide1-slides/slide11.jpg'
  ]
  
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      interval: { timing: 4000 },
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
