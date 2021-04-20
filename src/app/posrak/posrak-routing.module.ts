import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosrakPage } from './posrak.page';

const routes: Routes = [
  {
    path: '',
    component: PosrakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosrakPageRoutingModule {}
