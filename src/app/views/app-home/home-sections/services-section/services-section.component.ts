import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../../../../shared/animations/slider.animations';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styles: [],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSectionComponent implements OnInit {
  public carouselOptions: NguCarouselConfig;
  public items = [{
    photo: 'assets/images/contestants/contest1.jpg',
    name: 'Jhone Doe',
    country: 'Cameroon'
  }, {
    photo: 'assets/images/contestants/contest2.jpg',
    name: 'Adam Smith',
    country: 'Nigeria'
  }, {
    photo: 'assets/images/contestants/contest3.jpg',
    name: 'Helena White',
    country: 'Uganda'
  }, {
    photo: 'assets/images/contestants/contest4.jpg',
    name: 'Jessica Hiche',
    country: 'Ghana'
  }, {
    photo: 'assets/images/contestants/contest5.jpg',
    name: 'Jhone Doe',
    country: 'Cameroon'
  }, {
    photo: 'assets/images/contestants/contest6.jpg',
    name: 'Adam Smith',
    country: 'Nigeria'
  }, {
    photo: 'assets/images/contestants/contest7.jpg',
    name: 'Helena White',
    country: 'Uganda'
  }, {
    photo: 'assets/images/contestants/contest8.jpg',
    name: 'Jessica Hiche',
    country: 'Ghana'
  },{
    photo: 'assets/images/contestants/contest9.jpg',
    name: 'Adam Smith',
    country: 'Nigeria'
  }, {
    photo: 'assets/images/contestants/contest10.jpg',
    name: 'Helena White',
    country: 'Uganda'
  }, {
    photo: 'assets/images/contestants/contest11.jpg',
    name: 'Jessica Hiche',
    country: 'Ghana'
  }];
  constructor() { }
  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 2, lg: 4, all: 0 },
      //slide: 1,
      speed: 400,
      interval: { timing: 4000 },
      animation: 'lazy',
      point: {
        visible: true
      },
      //load: 2,
      touch: true,
      loop: true
    };
  }

}
