import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy, OnChanges  {

  productsInOffer: Product[] = [];
  subscription: Subscription | undefined = undefined;

  // productsExpired: Product[] = [];

  constructor(private service: ProductsService){
    // this.productsInOffer = service.getProducts();
    // this.productsExpired = service.getProductsExpired();
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // this.subscription = this.service.getProductsAsObservable().subscribe(
    //   prodotti => {
    //     console.log(prodotti);
    //     this.productsInOffer = prodotti;
    //   }
    // );
    this.subscription = this.service.getProductsAsObservableFromApi().subscribe(
      prodotti => {
        console.log(prodotti);
        this.productsInOffer = prodotti;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  showDetailsInPage(message: Product) {
    alert(message.id);
  }

}
