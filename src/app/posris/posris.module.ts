import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosrisPageRoutingModule } from './posris-routing.module';

import { PosrisPage } from './posris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosrisPageRoutingModule
  ],
  declarations: [PosrisPage]
})
export class PosrisPageModule {}
