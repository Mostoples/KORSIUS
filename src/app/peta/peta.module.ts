import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetaPageRoutingModule } from './peta-routing.module';

import { PetaPage } from './peta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetaPageRoutingModule
  ],
  declarations: [PetaPage]
})
export class PetaPageModule {}
