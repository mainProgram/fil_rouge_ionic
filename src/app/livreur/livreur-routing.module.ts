import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurPage } from './livreur.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: "livraisons",
    pathMatch: 'full'
  },
  {
    path: '',
    component: LivreurPage,
    children: [
      {
        path: 'livraisons',
        loadChildren: () => import('./livraisons/livraisons.module').then( m => m.LivraisonsPageModule)
      }
    ]
  },
  {
    path: 'livraison-detail',
    loadChildren: () => import('./livraison-detail/livraison-detail.module').then( m => m.LivraisonDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurPageRoutingModule {}
