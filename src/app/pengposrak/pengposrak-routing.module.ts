import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengposrakPage } from './pengposrak.page';

const routes: Routes = [
  {
    path: '',
    component: PengposrakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengposrakPageRoutingModule {}
