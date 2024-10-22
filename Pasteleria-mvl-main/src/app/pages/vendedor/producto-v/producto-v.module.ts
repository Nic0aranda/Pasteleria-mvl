import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoVPageRoutingModule } from './producto-v-routing.module';

import { ProductoVPage } from './producto-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoVPageRoutingModule
  ],
  declarations: [ProductoVPage]
})
export class ProductoVPageModule {}
