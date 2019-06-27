import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../../../../shared/animations/slider.animations';

@Component({
  selector: 'app-imageslideshow-carousel',
  templateUrl: './imageslideshow-carousel.component.html',
  styles: [],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageslideshowCarouselComponent implements OnInit {
  public carouselOptions: NguCarouselConfig;
  public carouselOptions2: NguCarouselConfig;
  public items = [
  {
    icon: 'pages',
    image: 'assets/images/slides/slide1-slides/slide1.jpg',
    text: `Meet Our Reigning Queen!`,
    title: 'Meet Queen Maria Boons from Cambodia. Our Reigning Queen - Miss Bronze Ireland 2019',
    subtitle: 'We celebrate our queens, we celebrate beauty.',
    actions: [
      {
        action: 'Learn More',
        state: 'contact-section',
        color: 'primary',
        icon: 'phone',
        link: '#'
      }
    ],
    type: 'grid'
  },
  {
    icon: 'send',
    image: 'assets/images/slides/slide3.jpg',
    text: `Audition and training will take place on Sunday 7th July 2019. `,
    title: 'What we do - Miss Bronze and Gold Ireland empowers young women of all nationalities.. ',
    subtitle: 'Living in Ireland? You can become the next queen!',
    actions: [
      {
        action: 'Register Now',
        state: 'testimonials-section',
        color: 'accent',
        icon: 'comment',
        link: '#'
      }
    ],
    type: 'grid'
  },
  {
    icon: 'dashboard',
    image: 'assets/images/slides/slide1.jpg',
    text: `Empowers young women of all nationalities living in Ireland. First Edition took place 2014.`,
    title: 'Miss Bronze and Gold Ireland',
    subtitle: 'Lorem ipsum dolor sit amet conse ctetur',
    actions: [
      {
        action: 'Download App',
        state: 'downloadapp',
        color: 'primary',
        icon: 'get_app',
        link: '#'
      },
      {
        action: 'Live Demo',
        state: '',
        color: 'default',
        link: 'https://stackoverflow.com/questions/2939914/how-do-i-vertically-align-text-in-a-div'
      }
    ],
    type: 'full'
  }
]

public slidesImages = [
  'assets/images/slides/slide1-slides/slide1.jpg',
  'assets/images/slides/slide1-slides/slide2.jpg',
  'assets/images/slides/slide1-slides/slide3.jpg',
  'assets/images/slides/slide1-slides/slide4.jpg',
  'assets/images/slides/slide1-slides/slide4.jpg',
  'assets/images/slides/slide1-slides/slide5.jpg'
]

constructor(){}

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
    loop: false
  }

  this.carouselOptions2 = {
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
