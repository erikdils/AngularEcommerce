import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
