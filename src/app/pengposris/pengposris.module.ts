import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengposrisPageRoutingModule } from './pengposris-routing.module';

import { PengposrisPage } from './pengposris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengposrisPageRoutingModule
  ],
  declarations: [PengposrisPage]
})
export class PengposrisPageModule {}
