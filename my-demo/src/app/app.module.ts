import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductNamePipe } from './products/pipes/product-name.pipe';
import { AddressPipe } from './products/pipes/address.pipe';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { FirstComponent } from './subjects/components/first/first.component';
import { SecondComponent } from './subjects/components/second/second.component';
import { CustomerProducerComponent } from './subjects/components/customer-producer/customer-producer.component';
import { HeroFormComponent } from './hero-form/hero-form/hero-form.component';
import { HeroReactiveFormComponent } from './hero-reactive-form/hero-reactive-form/hero-reactive-form.component';
import { UsersComponent } from './placeholder/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNamePipe,
    AddressPipe,
    ProductsPageComponent,
    RandomUsersPageComponent,
    ReqResPageComponent,
    WelcomeComponent,
    NotFoundComponent,
    MenuComponent,
    ProductDetailsComponent,
    FirstComponent,
    SecondComponent,
    CustomerProducerComponent,
    HeroFormComponent,
    HeroReactiveFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
