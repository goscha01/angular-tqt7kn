import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  /* DESCRIPTION:
    - This component must be a PARENT component of the ShopperComponent
    In this component, you will:
    1. Display a 'Shopping Cart' which should be an unordered list of items 
    2. You will receive Items from the CHILD ShopperComponent
    3. If the item you have already exists, you must UPDATE the <item_qty> of the item in your list 
    4. After adding each item to your shopping cart, you must send an updated 'lastItem' as input to the CHILD ShopperComponent 
    5. Using the 'Share' Service, you must display the name of the last item you purchased. Hint: these components are unrelated, consider RxJS here

    - If your list is empty you must display a <p> Shopping Cart is Empty </p>
    - If the item is in your list, you must update item_qty, otherwise add a new item 
    Your shoppingCartItems will be of type {}[]:
    { item_name: string, item_price: number, item_qty: number }[];


  */

  constructor() {}

  ngOnInit() {}
}
