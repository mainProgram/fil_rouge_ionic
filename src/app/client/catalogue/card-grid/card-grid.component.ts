import { Component, Input, OnInit } from '@angular/core';
import { IProduit } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {

  @Input() produit: IProduit

  constructor() { }

  ngOnInit() {}

}
