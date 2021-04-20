import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DafpusPage } from './dafpus.page';

const routes: Routes = [
  {
    path: '',
    component: DafpusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DafpusPageRoutingModule {}
