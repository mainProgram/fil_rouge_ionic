import { Component, Input, OnInit } from '@angular/core';
import { IProduit } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss'],
})
export class CardRowComponent implements OnInit {

  @Input() produit: IProduit

  constructor() { }

  ngOnInit() {}

}
