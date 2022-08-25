import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/shared/services/livreur.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.page.html',
  styleUrls: ['./livraisons.page.scss'],
})
export class LivraisonsPage implements OnInit {

  public livraisons = []
  
  constructor(private tokenService: TokenService, private livreurService: LivreurService) 
  { 
    let date = new Date().toISOString().substring(0,10);
    let idUserConnecte = +this.tokenService.getId()
    this.livreurService.getLivraisonsById(idUserConnecte).subscribe({
      next: data => {  
        this.livraisons = data.filter(el => el.date.split("T")[0] == date); 
        console.log(this.livraisons);
      }
    })
    
  }

  ngOnInit() {
  }

}
