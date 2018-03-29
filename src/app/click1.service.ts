import { Injectable } from '@angular/core';
import { click1module } from './modules/click1mudule';
@Injectable()
export class Click1Service {

  public click1: click1module[] = [
    {
      id: 1,
      name: 'tinuv',
      price: 1333,
      status: true,
    },
    {
      id: 2,
      name: 'tuoivuv',
      price: 3000,
      status: false,
    },
    {
      id: 3,
      name: 'doanld',
      price: 4000,
      status: true,
    }
  ];
  constructor() { }
  getAllProduct() {
    return this.click1;
  }
  getProductById(id: number) {
    // tslint:disable-next-line:prefer-const
    let  reSult = null;
    for ( let i = 0 ; i < this.click1.length ; i++ ) {
      if ( this.click1[i].id === id ) {
        reSult = this.click1[i];
        break;
      }
    }
    return reSult;
  }

}
