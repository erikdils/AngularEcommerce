import { Component, OnInit, Input } from '@angular/core';
import appState from '../../../app-state';

@Component({
  selector: 'app-extra-alert',
  templateUrl: './extra-alert.component.html',
  styleUrls: ['./extra-alert.component.sass']
})
export class ExtraAlertComponent implements OnInit {

  // @Input() st: any;
  st = appState;
  constructor() { 
  }

  ngOnInit() {
  }

  close(){
    this.st.alert.show = false;
  }
}
