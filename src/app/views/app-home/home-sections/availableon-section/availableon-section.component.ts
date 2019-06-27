import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-availableon-section',
  templateUrl: './availableon-section.component.html',
  styles: []
})
export class AvailableonSectionComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }

  downloadIos() {
    this.alert.update(`<strong>Download For IOS</strong>`,
    'question',
    `Confirm to procceed`,
      false, true, true, false).then(isConfirm => {
      if(isConfirm){
        // Do anything here
      }
    });
  }

  downloadWins(){
    this.alert.update(`<strong>Download For Windows</strong>`,
    'question',
    `Confirm to procceed`,
      false, true, true, false).then(isConfirm => {
      if(isConfirm){
        // Do anything here
      }
    });
  }

  downloadAndroid(){
    this.alert.update(`<strong>Download For Android</strong>`,
    'question',
    `Confirm to procceed`,
      false, true, true, false).then(isConfirm => {
      if(isConfirm){
        // Do anything here
      }
    });
  }
}
