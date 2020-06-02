import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import appState from '../../app-state';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  st = appState;

  constructor(private api: ApiService) { }

  async ngOnInit() {
    const fromServer: any = await this.api.getProducts();
    this.st.products = fromServer.products;
  }

  showState() {
    console.log(this.st)
  }

}
