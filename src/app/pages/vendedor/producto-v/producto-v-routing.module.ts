import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoVPage } from './producto-v.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoVPageRoutingModule {}
