import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import appState from '../../app-state';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  st = appState;
  // product: Product = {};
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  async create() {
    console.log(this.st.newProduct)
    const fromServer: any = await this.api.createProduct(this.st.newProduct);
    console.log(fromServer)
  
  }

}
