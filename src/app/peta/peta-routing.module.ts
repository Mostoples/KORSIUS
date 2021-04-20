import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetaPage } from './peta.page';

const routes: Routes = [
  {
    path: '',
    component: PetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetaPageRoutingModule {}
