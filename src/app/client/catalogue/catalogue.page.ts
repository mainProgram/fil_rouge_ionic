import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { ICatalogue } from '../../shared/models/interfaces';
import { Observable } from 'rxjs';
import { CardRowComponent } from './card-row/card-row.component';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  public produits : Observable<ICatalogue>
  public myImagePath = "../assets/images/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg";
  public opts = {
    freeMode: true,
    speed : 400,
    slidesPerView: 1.8, //
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 100, //100
  }
  public categories = [
    {
      id: "1",
      name: "Burgers",
      produits: []
    },
    {
      id: "2",
      name : "Menus",
      produits: []
    },
    {
      id: "3",
      name : "Frites",
      produits: []
    }, 
    {
      id: "4",
      name : "Boissons",
      produits: []
    }
  ] 

  public activeCategory = "burger"

  public selectedSegment = "list"

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.catalogueService.getProduits().subscribe(
      {
        next: data => { 
          this.categories = [
            {
              id: "1",
              name: "Burgers",
              produits: data.burgers
            },
            {
              id: "2",
              name : "Menus",
              produits: data.menus
            },
            {
              id: "3",
              name : "Frites",
              produits: data.frites
            }, 
            {
              id: "4",
              name : "Boissons",
              produits: data.boissons
            }
          ] 
        }
      }
    );
  }

  @ViewChildren(CardRowComponent, { read: ElementRef }) lists :  QueryList<CardRowComponent>
  public listElements = []
  @ViewChild(IonContent) content: IonContent;

  ngAfterViewInit()
  {
    this.lists.changes.subscribe(_ => {
      this.listElements = this.lists.toArray();
    });
  }

  public selectCategory(index)
  {
    const child = document.getElementById(index);        

    this.content.scrollToPoint(0, child.offsetTop + 220, 1000);
  }

  public segmentChange(event)
  {
    this.selectedSegment = (event.target.value);
  }

}
