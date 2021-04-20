import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengpostikPageRoutingModule } from './pengpostik-routing.module';

import { PengpostikPage } from './pengpostik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengpostikPageRoutingModule
  ],
  declarations: [PengpostikPage]
})
export class PengpostikPageModule {}
