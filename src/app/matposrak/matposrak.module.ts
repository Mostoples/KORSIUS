import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatposrakPageRoutingModule } from './matposrak-routing.module';

import { MatposrakPage } from './matposrak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatposrakPageRoutingModule
  ],
  declarations: [MatposrakPage]
})
export class MatposrakPageModule {}
