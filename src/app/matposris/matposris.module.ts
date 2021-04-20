import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatposrisPageRoutingModule } from './matposris-routing.module';

import { MatposrisPage } from './matposris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatposrisPageRoutingModule
  ],
  declarations: [MatposrisPage]
})
export class MatposrisPageModule {}
