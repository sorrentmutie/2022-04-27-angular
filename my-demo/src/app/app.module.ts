import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductNamePipe } from './products/pipes/product-name.pipe';
import { AddressPipe } from './products/pipes/address.pipe';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNamePipe,
    AddressPipe,
    ProductsPageComponent,
    RandomUsersPageComponent,
    ReqResPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
