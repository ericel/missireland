import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter, Input, Output, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { PaymentService } from './payment-service';
declare var braintree: any;
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})


export class PaymentFormComponent implements AfterViewInit, OnDestroy {

  // Total amount of the charge
  @Input() totalAmount: number;

  authorization = 'sandbox_g42y39zw_348pk9cgf3bgyw2b';
  @ViewChild('cardForm', {static: false}) cardForm: ElementRef;

  // State of async activity
  loading = false;

  constructor(
     private cd: ChangeDetectorRef,
     public pmt: PaymentService
      ) { 
  }

  ngAfterViewInit() {
    braintree.client.create({
      authorization: this.authorization
    }, (err, clientInstance) => {
      if (err) {
        console.error(err);
        return;
      }
      this.createHostedFields(clientInstance);
    });
  }

  createHostedFields(clientInstance) {
    braintree.hostedFields.create({
      client: clientInstance,
      styles: {
        'input': {
          'font-size': '16px',
          'font-family': 'courier, monospace',
          'font-weight': 'lighter',
          'color': '#ccc'
        },
        ':focus': {
          'color': 'black'
        },
        '.valid': {
          'color': '#8bdda8'
        }
      },
      fields: {
        number: {
          selector: '#card-number',
          placeholder: '4111 1111 1111 1111'
        },
        cvv: {
          selector: '#cvv',
          placeholder: '123'
        },
        expirationDate: {
          selector: '#expiration-date',
          placeholder: 'MM/YYYY'
        },
        postalCode: {
          selector: '#postal-code',
          placeholder: '11111'
        }
      }
    }, (err, hostedFieldsInstance) => {
      const teardown = (event) => {
        event.preventDefault();
        alert('Donate now to Miss Bronze');
        hostedFieldsInstance.teardown(() => {
          this.createHostedFields(clientInstance);
          this.cardForm.nativeElement.removeEventListener('submit', teardown, false);
        });
      };
      this.cardForm.nativeElement.addEventListener('click', teardown, false);
    });
  }


  ngOnDestroy() {

  }

}

