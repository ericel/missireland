import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.component.html',
  styles: [
    `
    .oval {
      height: 200px;
      width: 200px;
      color: #111;
      border-radius: 50%;
      text-align: center;
      font-size: 90px;
      float: left;
      shape-outside: ellipse();
      padding: 10px;
      background-color: MediumPurple;
      background-clip: content-box;
      
    }
    .oval img {
      border-radius: 50%;
    }
    span {
      padding-top: 70px;
      display: inline-block;
    }
    p{ margin-bottom: 20px;}`
  ]
})
export class AppAboutComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('About Us');
    this.meta.addTags([
      { name: 'description', content: 'Miss Bronze and Gold Ireland is one of the Largest multicultural pageant in Ireland!' },
      { property: 'og:site_name', content: 'Miss Bronze and Gold Ireland' },
      { property: 'og:title', content: 'About Us' },
      { property: 'og:description', content: 'Miss Bronze and Gold Ireland is one of the Largest multicultural pageant in Ireland!' },
      { property: 'og:image', content: 'https://missbronzeandgoldireland.com/assets/images/logo.jpg' },
      { property: 'og:url', content: `https://missbronzeandgoldireland.com/about` }
    ]);
  }

}
