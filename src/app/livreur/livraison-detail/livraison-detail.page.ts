import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.page.html',
  styleUrls: ['./livraison-detail.page.scss'],
})
export class LivraisonDetailPage implements OnInit {

  public livraison : any

  constructor(  private route: ActivatedRoute, private retour:Router, private livreurService: LivreurService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    this.livreurService.getLivraisonsById(id).subscribe({
      next: data => { this.livraison = data; console.log(data)},
      error: () => {this.retour.navigate(["/livraisons"])}
    })
  }


}
