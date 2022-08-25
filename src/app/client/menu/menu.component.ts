import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private tokenService: TokenService, private retour: Router) { }

  ngOnInit() {}

  public logout()
  {
    this.tokenService.clearToken();
    this.retour.navigate(["/security"])
  }
}
