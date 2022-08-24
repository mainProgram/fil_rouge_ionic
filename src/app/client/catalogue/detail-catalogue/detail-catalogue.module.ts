import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCataloguePageRoutingModule } from './detail-catalogue-routing.module';

import { DetailCataloguePage } from './detail-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCataloguePageRoutingModule
  ],
  declarations: [DetailCataloguePage],
  exports: [DetailCataloguePage],
})
export class DetailCataloguePageModule {}
