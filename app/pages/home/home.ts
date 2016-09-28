import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrandData} from '../../providers/brands';
import {CompleterCmp, CompleterService, CompleterData, COMPLETER_DATA_PROVIDERS} from 'ng2-completer';


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [CompleterCmp],
  providers: [COMPLETER_DATA_PROVIDERS, CompleterService, BrandData]
})
export class HomePage {
  brandName: any;
  brandInfo: any;
  brandData: any;
  private dataService: CompleterData;

  constructor(public navCtrl: NavController, private completerService: CompleterService,
              brandData: BrandData) {
    this.brandData = brandData;
    this.dataService = completerService.local(this.brandData.data, 'name', 'name');
  }

  clearBrand() {
    this.brandName = '';
  }

  checkBrand() {
    this.brandInfo = this.brandData.getOwner(this.brandName);
  }
}
