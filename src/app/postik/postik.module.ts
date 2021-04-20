import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostikPageRoutingModule } from './postik-routing.module';

import { PostikPage } from './postik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostikPageRoutingModule
  ],
  declarations: [PostikPage]
})
export class PostikPageModule {}
