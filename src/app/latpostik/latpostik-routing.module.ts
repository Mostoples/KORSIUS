import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatpostikPage } from './latpostik.page';

const routes: Routes = [
  {
    path: '',
    component: LatpostikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatpostikPageRoutingModule {}
