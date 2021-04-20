import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'postik',
    loadChildren: () => import('./postik/postik.module').then( m => m.PostikPageModule)
  },
  {
    path: 'matpostik',
    loadChildren: () => import('./matpostik/matpostik.module').then( m => m.MatpostikPageModule)
  },
  {
    path: 'pengpostik',
    loadChildren: () => import('./pengpostik/pengpostik.module').then( m => m.PengpostikPageModule)
  },
  {
    path: 'latpostik',
    loadChildren: () => import('./latpostik/latpostik.module').then( m => m.LatpostikPageModule)
  },
  {
    path: 'posris',
    loadChildren: () => import('./posris/posris.module').then( m => m.PosrisPageModule)
  },
  {
    path: 'posrak',
    loadChildren: () => import('./posrak/posrak.module').then( m => m.PosrakPageModule)
  },
  {
    path: 'pengposris',
    loadChildren: () => import('./pengposris/pengposris.module').then( m => m.PengposrisPageModule)
  },
  {
    path: 'matposris',
    loadChildren: () => import('./matposris/matposris.module').then( m => m.MatposrisPageModule)
  },
  {
    path: 'latposris',
    loadChildren: () => import('./latposris/latposris.module').then( m => m.LatposrisPageModule)
  },
  {
    path: 'pengposrak',
    loadChildren: () => import('./pengposrak/pengposrak.module').then( m => m.PengposrakPageModule)
  },
  {
    path: 'matposrak',
    loadChildren: () => import('./matposrak/matposrak.module').then( m => m.MatposrakPageModule)
  },
  {
    path: 'latposrak',
    loadChildren: () => import('./latposrak/latposrak.module').then( m => m.LatposrakPageModule)
  },
  {
    path: 'dafpus',
    loadChildren: () => import('./dafpus/dafpus.module').then( m => m.DafpusPageModule)
  },
  {
    path: 'rangkum',
    loadChildren: () => import('./rangkum/rangkum.module').then( m => m.RangkumPageModule)
  },
  {
    path: 'petunjuk',
    loadChildren: () => import('./petunjuk/petunjuk.module').then( m => m.PetunjukPageModule)
  },
  {
    path: 'pengantar',
    loadChildren: () => import('./pengantar/pengantar.module').then( m => m.PengantarPageModule)
  },
  {
    path: 'pendahuluan',
    loadChildren: () => import('./pendahuluan/pendahuluan.module').then( m => m.PendahuluanPageModule)
  },
  {
    path: 'peta',
    loadChildren: () => import('./peta/peta.module').then( m => m.PetaPageModule)
  },
  {
    path: 'materi',
    loadChildren: () => import('./materi/materi.module').then( m => m.MateriPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'lempostik',
    loadChildren: () => import('./lempostik/lempostik.module').then( m => m.LempostikPageModule)
  },
  {
    path: 'lemposris',
    loadChildren: () => import('./lemposris/lemposris.module').then( m => m.LemposrisPageModule)
  },
  {
    path: 'lemposrak',
    loadChildren: () => import('./lemposrak/lemposrak.module').then( m => m.LemposrakPageModule)
  },
  {
    path: 'halo',
    loadChildren: () => import('./halo/halo.module').then( m => m.HaloPageModule)
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
