import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatpostikPage } from './matpostik.page';

const routes: Routes = [
  {
    path: '',
    component: MatpostikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatpostikPageRoutingModule {}
