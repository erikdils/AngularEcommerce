import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import appState from '../../app-state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  st: any = appState;
  // product: Product = {};
  constructor() { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.st.newProduct)
  }

}
