import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosrisPage } from './posris.page';

const routes: Routes = [
  {
    path: '',
    component: PosrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosrisPageRoutingModule {}
