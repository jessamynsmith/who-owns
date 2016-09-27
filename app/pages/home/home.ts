import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  brand:any;
  owner:any;

  constructor(public navCtrl: NavController) {

  }

  checkBrand() {
    this.owner = this.brand;
  }
}
