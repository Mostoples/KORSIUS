import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatposrisPageRoutingModule } from './latposris-routing.module';

import { LatposrisPage } from './latposris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatposrisPageRoutingModule
  ],
  declarations: [LatposrisPage]
})
export class LatposrisPageModule {}
