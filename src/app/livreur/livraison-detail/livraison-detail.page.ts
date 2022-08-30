import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { MyModalPage } from 'src/app/shared/my-modal/my-modal.page';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.page.html',
  styleUrls: ['./livraison-detail.page.scss'],
})
export class LivraisonDetailPage implements OnInit {

  public livraison : any

  constructor(  
    private retour:Router, 
    private route: ActivatedRoute, 
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private livreurService: LivreurService, 
  ) 
  { }

  ngOnInit() {
    this.route.queryParams.subscribe({
      next: data => {
        let id = data["id"]
        console.log(id);
 
        this.livreurService.getLivraisonsById(id).subscribe({
          next: data => { this.livraison = data; console.log(data)},
          error: (error) => {  this.navCtrl.navigateForward("/livreur")  }
        })
      }
    })

  }

  public goBack()
  {
    this.navCtrl.pop();
  }

  showCamera(){
    alert("hi")
  }

  async showCode(){
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: "small-modal"
    })

    await modal.present();
  }
}
