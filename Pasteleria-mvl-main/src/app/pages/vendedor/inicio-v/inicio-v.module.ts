import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioVPageRoutingModule } from './inicio-v-routing.module';

import { InicioVPage } from './inicio-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioVPageRoutingModule
  ],
  declarations: [InicioVPage]
})
export class InicioVPageModule {}
