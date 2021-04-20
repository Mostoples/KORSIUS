import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengantarPageRoutingModule } from './pengantar-routing.module';

import { PengantarPage } from './pengantar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengantarPageRoutingModule
  ],
  declarations: [PengantarPage]
})
export class PengantarPageModule {}
