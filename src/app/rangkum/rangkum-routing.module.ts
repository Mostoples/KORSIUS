import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangkumPage } from './rangkum.page';

const routes: Routes = [
  {
    path: '',
    component: RangkumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangkumPageRoutingModule {}
