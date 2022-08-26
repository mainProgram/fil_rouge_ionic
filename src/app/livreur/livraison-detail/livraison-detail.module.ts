import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivraisonDetailPageRoutingModule } from './livraison-detail-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LivraisonDetailPage } from './livraison-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraisonDetailPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [LivraisonDetailPage]
})
export class LivraisonDetailPageModule {}
