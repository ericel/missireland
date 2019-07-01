import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
