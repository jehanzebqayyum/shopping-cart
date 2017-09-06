import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { ProductsComponent }    from './products.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

