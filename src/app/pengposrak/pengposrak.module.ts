import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengposrakPageRoutingModule } from './pengposrak-routing.module';

import { PengposrakPage } from './pengposrak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengposrakPageRoutingModule
  ],
  declarations: [PengposrakPage]
})
export class PengposrakPageModule {}
