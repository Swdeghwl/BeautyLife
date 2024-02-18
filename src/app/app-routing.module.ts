import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import { ProductcastComponent } from './component/homepage/cast/productcast/productcast.component';
import { FiltercastComponent } from './component/homepage/cast/filtercast/filtercast.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'product/:id',
    component: ProductcastComponent
  },
  {
    path: 'product/:id/filter/:id',
    component: FiltercastComponent
  },
  {
    path: 'filter/:id',
    component: FiltercastComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
