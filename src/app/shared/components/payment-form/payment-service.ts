import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var StripeCheckout: any;
declare var Stripe: any;

@Injectable()
export class PaymentService {

  //private stripe = Stripe(environment.stripePublishable);
  elements: any;

  constructor() {
   
  }
}