import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostikPage } from './postik.page';

const routes: Routes = [
  {
    path: '',
    component: PostikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostikPageRoutingModule {}
