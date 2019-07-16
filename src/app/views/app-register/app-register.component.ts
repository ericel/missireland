import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styles: []
})
export class AppRegisterComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('Register for the Pageant');
    this.meta.addTags([
      { name: 'description', content: 'The Second Edition will be held on Saturday 27th July at Ambassadors Hotel,Military Hill, Cork. The event will start at 6:00pm. Register now!' },
      { property: 'og:site_name', content: 'Miss Bronze and Gold Ireland' },
      { property: 'og:title', content: 'Register for the Pageant' },
      { property: 'og:description', content: 'The Second Edition will be held on Saturday 27th July at Ambassadors Hotel,Military Hill, Cork. The event will start at 6:00pm. Register now!' },
      { property: 'og:image', content: 'https://missbronzeandgoldireland.com/assets/images/logo.jpg' },
      { property: 'og:url', content: `https://missbronzeandgoldireland.com/register` }
    ]);
  }

}
