import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemposrisPageRoutingModule } from './lemposris-routing.module';

import { LemposrisPage } from './lemposris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemposrisPageRoutingModule
  ],
  declarations: [LemposrisPage]
})
export class LemposrisPageModule {}
