import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionCompraPageRoutingModule } from './validacion-compra-routing.module';

import { ValidacionCompraPage } from './validacion-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacionCompraPageRoutingModule
  ],
  declarations: [ValidacionCompraPage]
})
export class ValidacionCompraPageModule {}
