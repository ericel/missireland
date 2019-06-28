import { Component, OnInit, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { WINDOW } from '../../services/windows.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input() sizeLogo;
  isFixedHeader;
   
  @HostBinding('class.menu-opened') menuOpened = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedHeader = true;
    } else {
      this.isFixedHeader = false;
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  buyEgret() {
    this.window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
  }

}