import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import { ProductcastComponent } from './component/homepage/cast/productcast/productcast.component';
import { FiltercastComponent } from './component/homepage/cast/filtercast/filtercast.component';
import { SellcastComponent } from './component/homepage/cast/sellcast/sellcast.component';
import { CartComponent } from './component/cart/cart.component';
import { SignComponent } from './component/sign/sign.component';
import { AccountcastComponent } from './component/homepage/cast/accountcast/accountcast.component';
import { SearchcastComponent } from './component/homepage/cast/searchcast/searchcast.component';
import { SituationcastComponent } from './component/homepage/cast/situationcast/situationcast.component';


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
  {
    path: 'search/:id/sell/:id',
    component: SellcastComponent
  },
  {
    path: 'situation/:id/sell/:id',
    component: SellcastComponent
  },
  {
    path: 'product/:id/situation/:id/sell/:id',
    component: SellcastComponent
  },

  // cart
  {
    path: 'cart',
    component: CartComponent
  },

  // sign
  {
    path: 'sign/:id',
    component: SignComponent
  },
  {
    path: 'sign/:id/sign/:id',
    component: SignComponent
  },

  // account
  {
    path: 'account',
    component: AccountcastComponent
  },

  // search
  {
    path: 'search/:id',
    component: SearchcastComponent,
  },

  // img
  {
    path: 'situation/:id',
    component: SituationcastComponent
  },
  {
    path: 'product/:id/situation/:id',
    component: SituationcastComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

