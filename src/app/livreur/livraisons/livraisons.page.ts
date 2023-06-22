import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { LivreurService } from 'src/app/shared/services/livreur.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.page.html',
  styleUrls: ['./livraisons.page.scss'],
})
export class LivraisonsPage implements OnInit {

  public livraisons = []
  public zone = ""
  public isLoaded : boolean
  // mesLivraisons =  new BehaviorSubject<[]>([]);
  // livraisons = this.mesLivraisons.asObservable();
  
  constructor(
    private tokenService: TokenService, 
    private livreurService: LivreurService, 
    private router : Router, 
    private navCtrl: NavController,
    private userService: UserService
  ) 
  { 
    
  }

  ngOnInit() {
    let date = new Date().toISOString().substring(0,10);
    let idUserConnecte = +this.tokenService.getId()
    
    console.log(idUserConnecte);
    
    this.livreurService.getLivraisonsLivreurById(idUserConnecte).subscribe({
      next: data => {  
        this.livraisons = data.filter(el => el.date.split("T")[0] == date); 
        console.log(this.livraisons);
        setTimeout(() => {
          this.isLoaded = true
        }, 2000);
        // this.mesLivraisons.next(data.filter(el => el.date.split("T")[0] == date)); 
      }
    })

    this.userService.getuserId().then(data => {
       this.livreurService.getLivraisonsLivreurById(idUserConnecte).subscribe({
        next: data => {  
          this.livraisons = data.filter(el => el.date.split("T")[0] == date); 
          console.log(this.livraisons);
          setTimeout(() => {
            this.isLoaded = true
          }, 2000);
          // this.mesLivraisons.next(data.filter(el => el.date.split("T")[0] == date)); 
        }
      })  
    })
  }

  public showDetails(id: number){
    let navigationExtras: NavigationExtras = {
      queryParams: {  id: id  }
    };
    this.navCtrl.navigateForward([`livreur/livraison-detail/${id}`], navigationExtras)
  }


}
