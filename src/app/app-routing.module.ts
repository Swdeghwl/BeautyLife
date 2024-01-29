import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import { ProductcastComponent } from './component/homepage/cast/productcast/productcast.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'product', component:ProductcastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
