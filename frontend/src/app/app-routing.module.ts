import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }   from './products.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',   component: ProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


