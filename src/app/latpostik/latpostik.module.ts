import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatpostikPageRoutingModule } from './latpostik-routing.module';

import { LatpostikPage } from './latpostik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatpostikPageRoutingModule
  ],
  declarations: [LatpostikPage]
})
export class LatpostikPageModule {}
