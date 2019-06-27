import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styles: []
})
export class AppHomeComponent implements OnInit {

  constructor(
    private router: Router, 
    private wowService: NgwWowService,
    private title: Title
    ){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
  }

  ngOnInit() {
    this.title.setTitle('Angular Template Blue');
  }

}
