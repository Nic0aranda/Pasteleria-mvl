import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacionCompraPage } from './validacion-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacionCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacionCompraPageRoutingModule {}
