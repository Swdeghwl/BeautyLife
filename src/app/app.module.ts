import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import { FirstheaderComponent } from './component/homepage/components/header/firstheader/firstheader.component';
import { SecondheaderComponent } from './component/homepage/components/header/secondheader/secondheader.component';
import { SliderComponent } from './component/homepage/components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataserviceService } from './services/data/data.service';
import { CategoryComponent } from './component/homepage/components/category/category.component';
import { NewproductComponent } from './component/homepage/components/newproduct/newproduct.component';
import { LimitedPipe } from './pipes/limeted/limited.pipe';
import { NewbrandComponent } from './component/homepage/components/newbrand/newbrand.component';
import { PopularproductComponent } from './component/homepage/components/popularproduct/popularproduct.component';
import { PopularbrandComponent } from './component/homepage/components/popularbrand/popularbrand.component';
import { SideComponent } from './component/homepage/components/side/side.component';
import { NewsComponent } from './component/homepage/components/news/news.component';
import { ProductsComponent } from './component/homepage/components/products/products.component';
import { FooterComponent } from './component/homepage/components/footer/footer.component';
import { ProductcastComponent } from './component/homepage/cast/productcast/productcast.component';
import { AllproductComponent } from './component/homepage/components/allproduct/allproduct.component';
import { FilterComponent } from './component/homepage/components/filter/filter.component';
import { AllproductsComponent } from './component/homepage/components/allproducts/allproducts.component';
import { FormsModule } from '@angular/forms';
import { FiltercastComponent } from './component/homepage/cast/filtercast/filtercast.component';
import { FiltersService } from './services/filters/filters.service';
import { IdService } from './services/id/id.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstheaderComponent,
    SecondheaderComponent,
    SliderComponent,
    CategoryComponent,
    NewproductComponent,
    LimitedPipe,
    NewbrandComponent,
    PopularproductComponent,
    PopularbrandComponent,
    SideComponent,
    NewsComponent,
    ProductsComponent,
    FooterComponent,
    ProductcastComponent,
    AllproductComponent,
    FilterComponent,
    AllproductsComponent,
    FiltercastComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    DataserviceService,
    FiltersService,
    IdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
