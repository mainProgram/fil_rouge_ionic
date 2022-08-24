import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { DetailCataloguePageModule } from './detail-catalogue/detail-catalogue.module';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';
import { CardRowComponent } from './card-row/card-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardGridComponent } from './card-grid/card-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    DetailCataloguePageModule,
    SharedDirectivesModule,
    FontAwesomeModule
  ],
  declarations: [
    CataloguePage,
    CardRowComponent,
    CardGridComponent,
  ],
  exports: [
    CataloguePage,
    CardRowComponent,
    CardGridComponent,
  ],
})
export class CataloguePageModule {}
