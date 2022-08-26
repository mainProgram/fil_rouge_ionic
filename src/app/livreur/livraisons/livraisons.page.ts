import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreurService } from 'src/app/shared/services/livreur.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.page.html',
  styleUrls: ['./livraisons.page.scss'],
})
export class LivraisonsPage implements OnInit {

  public livraisons = []
  public zone = ""
  
  constructor(private tokenService: TokenService, private livreurService: LivreurService, private router : Router) 
  { 
    let date = new Date().toISOString().substring(0,10);
    let idUserConnecte = +this.tokenService.getId()
    this.livreurService.getLivraisonsLivreurById(idUserConnecte).subscribe({
      next: data => {  
        this.livraisons = data.filter(el => el.date.split("T")[0] == date); 

        console.log(this.zone);
      }
    })
    
  }

  ngOnInit() {
  }


}
