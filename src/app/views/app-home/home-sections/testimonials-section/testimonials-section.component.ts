import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../../../../shared/animations/slider.animations';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styles: [],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsSectionComponent implements OnInit {
  public carouselOptions: NguCarouselConfig;
  public items = [{
    logo: 'assets/images/testi/mock-logo-4.png',
    photo: 'assets/images/testi/face-1.jpg',
    text: `“I’ve tried using different softwares. The computer is not my strong side. 
    There is excellent support behind DevEgret and people to walk you through it. 
    If you have any questions they’ll go over that and explain to you how to do that. ”`,
    title: 'Jhone Doe',
    subtitle: 'Product Manager'
  }, {
    logo: 'assets/images/testi/mock-logo-2.png',
    photo: 'assets/images/testi/face-2.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Adam Smith',
    subtitle: 'CEO'
  }, {
    logo: 'assets/images/testi/mock-logo-3.png',
    photo: 'assets/images/testi/face-3.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jhone White',
    subtitle: 'Software Engineer'
  }, {
    logo: 'assets/images/testi/mock-logo-1.png',
    photo: 'assets/images/testi/face-4.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jessica Hiche',
    subtitle: 'CEO'
  }]
  constructor() { }
  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 2, all: 0 },
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
