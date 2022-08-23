import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { DetailCataloguePageModule } from './detail-catalogue/detail-catalogue.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    DetailCataloguePageModule
  ],
  declarations: [CataloguePage],
  exports: [CataloguePage],
})
export class CataloguePageModule {}
