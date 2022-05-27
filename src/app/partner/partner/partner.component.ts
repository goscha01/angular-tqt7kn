import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent implements OnInit {
  /* DESCRIPTION:
    - This component is a SIBBLING to the ShoppingCartComponent
    - This component must receive the 'lastItemName' from a shared service with the ShoppingCartComponent
    1. Each time a new item is added to the shopping cart, this component must be updated with the name of the most-recently added item.

    You will display that item as <p>Last Item Purchase: <lastItemName> </p> tag 
  */
  constructor() {}

  ngOnInit() {}

  getData() {
    //Method to receive and update lastItemName
  }
}
