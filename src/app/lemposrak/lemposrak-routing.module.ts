import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LemposrakPage } from './lemposrak.page';

const routes: Routes = [
  {
    path: '',
    component: LemposrakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LemposrakPageRoutingModule {}
