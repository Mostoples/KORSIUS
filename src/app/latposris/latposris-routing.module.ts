import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatposrisPage } from './latposris.page';

const routes: Routes = [
  {
    path: '',
    component: LatposrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatposrisPageRoutingModule {}
