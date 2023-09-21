import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Order } from '../order';
import { OrderProcessed } from '../orderprocessed';
import { ChallengeService } from './challenge.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {

  constructor(private challengeService: ChallengeService) { }

  order: Order = {
    amounts: new Array(),
    additionalTaxes: new Array(),
    discounts: new Array(),
    totalOrder: 0,
    paymentMethodId: 0,
    payeeId: ''
  };

  orderProcessed: OrderProcessed = {
    paymentLink: ''
  };

  linkDescription = '';

  onSubmit(f: NgForm) {

    this.order.totalOrder = f.value.totalOrder;
    this.order.paymentMethodId = 1;
    this.order.payeeId = f.value.payeeId;
    this.challengeService.postOrder(this.order).subscribe((orderProcessed: OrderProcessed) => {
      this.orderProcessed = orderProcessed;
      this.linkDescription = 'efetuar pagamento';
    });
  }

  addAmount(f: NgForm) {
    this.order.amounts.push(f.value.amount);
  }

  addTax(f: NgForm) {
    this.order.additionalTaxes.push(f.value.additionalTax);
  }

  addDiscount(f: NgForm) {
    this.order.discounts.push(f.value.discount);
  }
}
