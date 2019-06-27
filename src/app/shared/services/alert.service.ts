import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2'
export interface Msg {
    content: string;
    style: string;
    title?: string;
  }
@Injectable()
export class AlertService {
  private _msgSource = new Subject<Msg | null>();
  msg = this._msgSource.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  async update(title: string, style: 'error' | 'info' | 'success' | 'question',  content?: string,  allowOutsideClick?: boolean,
   showConfirmButton?: boolean, showCancelButton?: boolean, close?: boolean, timer?: any) {
    const msg: Msg = {  title, content, style };
    this._msgSource.next(msg);
    if(isPlatformBrowser(this.platformId)){
    return await Swal.fire({
        title: title,
        html: content || '',
        type: style,
        allowOutsideClick: allowOutsideClick,
        backdrop: true,
        showConfirmButton: showConfirmButton,
        showCancelButton: showCancelButton,
        showCloseButton: close,
        confirmButtonColor: '#19232e',
        cancelButtonColor: '#dd2c00',
        timer: timer
      })
      .then(isConfirm => {
        const status = isConfirm.value ? true : isConfirm.dismiss ? false : '';
        return status;
      });
    }
  }
  clear() {
    this._msgSource.next(null);
  }
}
