import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductNamePipe } from './products/pipes/product-name.pipe';
import { AddressPipe } from './products/pipes/address.pipe';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNamePipe,
    AddressPipe,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
