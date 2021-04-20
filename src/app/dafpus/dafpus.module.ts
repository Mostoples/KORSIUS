import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DafpusPageRoutingModule } from './dafpus-routing.module';

import { DafpusPage } from './dafpus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DafpusPageRoutingModule
  ],
  declarations: [DafpusPage]
})
export class DafpusPageModule {}
