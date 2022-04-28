import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent  {

  productsInOffer: Product[] = [];
  productsExpired: Product[] = [];

  constructor(){
    this.productsInOffer = this.getProducts();
    this.productsExpired = this.getProductsExpired();
  }

  showDetailsInPage(message: Product) {
    alert(message.id);
  }

  getProducts(): Product[] {
    return [
      {id: 1, name: "Frigorifero", code: "A01", releaseDate: new Date(),
      price: 600,
      picture: "https://roboelettroshop.altervista.org/wp-content/uploads/2018/06/Frigorifero-Hotpoint-Ariston-E4D-AAA-X-C-8.jpg" },
      {id: 2, name: "Frigorifero 2", code: "A02", releaseDate: new Date(),
      price: 700,
      picture: "https://roboelettroshop.altervista.org/wp-content/uploads/2018/06/Frigorifero-Hotpoint-Ariston-E4D-AAA-X-C-8.jpg" }
    ];
  }

  getProductsExpired(): Product[] {
    return [
      {id: 3, name: "Frigorifero", code: "A01", releaseDate: new Date(),
      price: 600,
      picture: "https://roboelettroshop.altervista.org/wp-content/uploads/2018/06/Frigorifero-Hotpoint-Ariston-E4D-AAA-X-C-8.jpg" },
      {id: 4, name: "Frigorifero 2", code: "A02", releaseDate: new Date(),
      price: 700,
      picture: "https://roboelettroshop.altervista.org/wp-content/uploads/2018/06/Frigorifero-Hotpoint-Ariston-E4D-AAA-X-C-8.jpg" }
    ];
  }


}
