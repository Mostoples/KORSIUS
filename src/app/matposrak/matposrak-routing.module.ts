import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatposrakPage } from './matposrak.page';

const routes: Routes = [
  {
    path: '',
    component: MatposrakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatposrakPageRoutingModule {}
