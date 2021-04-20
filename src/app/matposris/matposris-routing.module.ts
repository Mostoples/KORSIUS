import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatposrisPage } from './matposris.page';

const routes: Routes = [
  {
    path: '',
    component: MatposrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatposrisPageRoutingModule {}
