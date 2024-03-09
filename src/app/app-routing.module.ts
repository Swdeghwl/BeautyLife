import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import { ProductcastComponent } from './component/homepage/cast/productcast/productcast.component';
import { FiltercastComponent } from './component/homepage/cast/filtercast/filtercast.component';
import { SellcastComponent } from './component/homepage/cast/sellcast/sellcast.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  // homepage
  {
    path: '',
    component: HomepageComponent
  },

  // product
  {
    path: 'product/:id',
    component: ProductcastComponent
  },

  // filter
  {
    path: 'product/:id/filter/:id',
    component: FiltercastComponent
  },
  {
    path: 'filter/:id',
    component: FiltercastComponent
  },

  // sell
  {
    path: 'sell/:id',
    component: SellcastComponent
  },
  {
    path: 'filter/:id/sell/:id',
    component: SellcastComponent
  },
  {
    path: 'product/:id/filter/:id/sell/:id',
    component: SellcastComponent
  },
  {
    path: 'product/:id/sell/:id',
    component: SellcastComponent
  },
  {
    path: 'cart/sell/:id',
    component: SellcastComponent
  },

  // cart
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
