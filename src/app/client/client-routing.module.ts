import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
