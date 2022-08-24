import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCataloguePage } from './detail-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCataloguePageRoutingModule {}
