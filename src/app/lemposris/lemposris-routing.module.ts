import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LemposrisPage } from './lemposris.page';

const routes: Routes = [
  {
    path: '',
    component: LemposrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LemposrisPageRoutingModule {}
