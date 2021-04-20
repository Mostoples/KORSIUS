import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengantarPage } from './pengantar.page';

const routes: Routes = [
  {
    path: '',
    component: PengantarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengantarPageRoutingModule {}
