import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrandData} from '../../providers/brands';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [BrandData]
})
export class HomePage {
  brandName: any;
  brandInfo: any;
  brandData: any;

  constructor(public navCtrl: NavController, brandData: BrandData) {
    this.brandData = brandData;
  }

  checkBrand() {
    this.brandInfo = this.brandData.getOwner(this.brandName);
  }
}
