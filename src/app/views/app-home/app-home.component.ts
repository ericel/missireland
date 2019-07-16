import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styles: []
})
export class AppHomeComponent implements OnInit {

  constructor(
    private router: Router, 
    private wowService: NgwWowService,
    private title: Title,
    private meta: Meta
    ){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
  }
  
  ngOnInit() {
    this.title.setTitle('Miss Bronze and Gold Ireland Pageant');
    this.meta.addTags([
      { name: 'description', content: 'Miss Bronze and Gold Ireland is out to empower young women of all nationalities living in Ireland. Miss Bronze and Gold Ireland is one of the Largest multicultural pageant in Ireland.' },
      { property: 'og:site_name', content: 'Miss Bronze and Gold Ireland' },
      { property: 'og:title', content: 'Miss Bronze and Gold Ireland Pageant' },
      { property: 'og:description', content: 'Miss Bronze and Gold Ireland is out to empower young women of all nationalities living in Ireland. Miss Bronze and Gold Ireland is one of the Largest multicultural pageant in Ireland.' },
      { property: 'og:image', content: 'https://missbronzeandgoldireland.com/assets/images/logo.jpg' },
      { property: 'og:url', content: `https://missbronzeandgoldireland.com/` }
    ]);
  }

}
