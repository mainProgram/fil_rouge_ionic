import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.page.html',
  styleUrls: ['./livreur.page.scss'],
})
export class LivreurPage implements OnInit {

  constructor(private tokenService: TokenService, private retour: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public logout()
  {
    this.tokenService.clearToken();
    // this.retour.navigate(["/security"])
    this.navCtrl.navigateForward("/security")
  }
}
