import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css'],
})
export class ShopperComponent implements OnInit {
  /* DESCRIPTION:
   - This component must be a CHILD of the ShoppingCartComponent
    In this component, you will implement a ReactiveForm with the following fields:
    1. item_name - string - required
    2. item_price - number - required AND > 0
    3. item_qty - number - required AND > 0

    You will have a button "Add to Shopping Cart" that adds the item(s) to the PARENT ShoppingCartComponent. You must do this by passing the value from this CHILD component TO the PARENT component 

    Finally, from the PARENT component, you will receive a 'lastItem' as Input, which you must display once a user has added at least 1 item to their shopping cart
   
    Additional: 

    Item should be represented as an object with the following type:
    item: { item_name: string, item_price: number, item_qty: number }
  */
  constructor() {}

  ngOnInit() {}
}
