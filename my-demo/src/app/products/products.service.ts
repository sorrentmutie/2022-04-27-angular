import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/product';
import { SpecialOffersService } from './special-offers.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private offers: SpecialOffersService) {}


  getDiscount(id: number) {
    const product = this.getProducts().find(x => x.id === id);
    if(product) {
      return this.offers.getDiscount(product);
    } else {
      return 0;
    }
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

  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }

  getProductsAsObservableFromApi(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsApiUrl);
  }


}
