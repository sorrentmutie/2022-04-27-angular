import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address, Person, Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  //products: Product[] | undefined = [];
  @Input() products: Product[] = [];
  @Output() emitter: EventEmitter<Product> = new EventEmitter<Product>();

  address: Address | null = null;
  person: Person | undefined = undefined;

  constructor() {
    //this.products = this.getProducts();
    this.address = { street: "Via del Pino", number: "1" };
    this.person = {id: 1, address: this.address}
   }

   showDetails(product: Product): void {
     //alert(product.name);
     this.emitter.emit(product);
   }

}
