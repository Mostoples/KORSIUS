import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LempostikPage } from './lempostik.page';

const routes: Routes = [
  {
    path: '',
    component: LempostikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LempostikPageRoutingModule {}
