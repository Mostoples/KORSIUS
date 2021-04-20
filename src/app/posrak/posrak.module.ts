import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosrakPageRoutingModule } from './posrak-routing.module';

import { PosrakPage } from './posrak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosrakPageRoutingModule
  ],
  declarations: [PosrakPage]
})
export class PosrakPageModule {}
