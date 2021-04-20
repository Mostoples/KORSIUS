import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatposrakPageRoutingModule } from './latposrak-routing.module';

import { LatposrakPage } from './latposrak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatposrakPageRoutingModule
  ],
  declarations: [LatposrakPage]
})
export class LatposrakPageModule {}
