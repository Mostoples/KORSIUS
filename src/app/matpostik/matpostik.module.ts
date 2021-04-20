import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatpostikPageRoutingModule } from './matpostik-routing.module';

import { MatpostikPage } from './matpostik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatpostikPageRoutingModule
  ],
  declarations: [MatpostikPage]
})
export class MatpostikPageModule {}
