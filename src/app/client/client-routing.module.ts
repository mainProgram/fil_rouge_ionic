import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HasRoleGuard } from '../shared/guards/has-role.guard';
import { CataloguePage } from './catalogue/catalogue.page';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children: [
      { path: '', redirectTo:"catalogue", pathMatch: 'full'}, 
      {
        path: 'catalogue',
        loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
      },
    ]
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule), canActivate:[AuthGuard, HasRoleGuard], data: { role: "ROLE_CLIENT"} 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
