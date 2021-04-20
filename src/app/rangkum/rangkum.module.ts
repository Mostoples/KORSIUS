import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangkumPageRoutingModule } from './rangkum-routing.module';

import { RangkumPage } from './rangkum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangkumPageRoutingModule
  ],
  declarations: [RangkumPage]
})
export class RangkumPageModule {}
