import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LempostikPageRoutingModule } from './lempostik-routing.module';

import { LempostikPage } from './lempostik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LempostikPageRoutingModule
  ],
  declarations: [LempostikPage]
})
export class LempostikPageModule {}
