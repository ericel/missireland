import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styles: []
})
export class AppContactComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('Contact Us');
    this.meta.addTags([
      { name: 'description', content: 'Have any questions about Miss Bronze and Gold Ireland? Contact us!' },
      { property: 'og:site_name', content: 'Miss Bronze and Gold Ireland' },
      { property: 'og:title', content: 'Contact Us' },
      { property: 'og:description', content: 'Have any questions about Miss Bronze and Gold Ireland? Contact us!' },
      { property: 'og:image', content: 'https://missbronzeandgoldireland.com/assets/images/logo.jpg' },
      { property: 'og:url', content: `https://missbronzeandgoldireland.com/about` }
    ]);
  }

}
