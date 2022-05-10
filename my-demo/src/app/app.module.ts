import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { GlobalNotificationComponent } from './shared/components/global-notification/global-notification.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './login/components/login/login.component';


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
    UsersComponent,
    GlobalNotificationComponent,
    FooterComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
