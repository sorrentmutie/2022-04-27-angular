import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form/hero-form.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { CustomerProducerComponent } from './subjects/components/customer-producer/customer-producer.component';
import { FirstComponent } from './subjects/components/first/first.component';

const routes: Routes = [
  {path: 'randomusers', component: RandomUsersPageComponent},
  {path: 'products', component: ProductsPageComponent },
  {path: 'products/:id', component: ProductDetailsComponent },
  {path: 'reqres', component: ReqResPageComponent},
  {path: 'customerproducer', component: CustomerProducerComponent},
  {path: 'heroform', component: HeroFormComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'first', component: FirstComponent},
  {path: '', redirectTo: 'heroform', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
