import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../shared/services/catalogue.service';
import { ICatalogue } from '../shared/models/interfaces';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  public produits : Observable<ICatalogue>
  public burgers = []
  public menus = []
  public myImagePath = "../assets/images/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg";

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.catalogueService.getProduits().subscribe(
      {
        next: data => { 
          this.burgers = data.burgers
          this.menus = data.menus
        }
      }
    );
  }

}
