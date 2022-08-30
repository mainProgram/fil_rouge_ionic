import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';
import { IonContent, IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private tokenService: TokenService, private retour: Router, private navCtrl: NavController) { }

  ngOnInit() {}

  public logout()
  {
    this.tokenService.clearToken();
    this.retour.navigate(["/security"])
  }

  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonMenu) menu: IonMenu;

  public selectCategory(index)
  {
    this.menu.close();
    
    document.getElementById(index).scrollIntoView();
  }

  public goSomewhere(where){
    this.navCtrl.navigateForward(where);
  }
}
