import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';
import { DetailCataloguePage } from './detail-catalogue/detail-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage,
    children: 
    [
      {
        path: ':id',
        component: DetailCataloguePage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
