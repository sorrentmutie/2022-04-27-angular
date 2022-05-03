import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {

  constructor() { }

  getDiscount(product: Product): number {
    return 0.20;
  }
}
