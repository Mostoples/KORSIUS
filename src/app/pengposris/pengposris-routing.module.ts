import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengposrisPage } from './pengposris.page';

const routes: Routes = [
  {
    path: '',
    component: PengposrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengposrisPageRoutingModule {}
