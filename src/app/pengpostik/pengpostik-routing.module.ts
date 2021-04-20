import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengpostikPage } from './pengpostik.page';

const routes: Routes = [
  {
    path: '',
    component: PengpostikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengpostikPageRoutingModule {}
