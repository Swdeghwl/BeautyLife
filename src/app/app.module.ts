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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstheaderComponent,
    SecondheaderComponent,
    SliderComponent,
    CategoryComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    DataserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
