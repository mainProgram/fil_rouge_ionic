import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreurPageRoutingModule } from './livreur-routing.module';

import { LivreurPage } from './livreur.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [LivreurPage]
})
export class LivreurPageModule {}
