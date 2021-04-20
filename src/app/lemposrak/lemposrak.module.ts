import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemposrakPageRoutingModule } from './lemposrak-routing.module';

import { LemposrakPage } from './lemposrak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemposrakPageRoutingModule
  ],
  declarations: [LemposrakPage]
})
export class LemposrakPageModule {}
