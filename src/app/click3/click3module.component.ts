import { NgModule} from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';

import { Click3Component} from './click3.component';
import { LoginComponent } from './login/login.component';
import { routerClick3 } from './click3router.component';
@NgModule({
  imports: [
    routerClick3,
  ],
  exports: [
    Click3Component,
  ],

  declarations: [
    Click3Component,
    LoginComponent,
  ],
})
// tslint:disable-next-line:class-name
export class click3module {}
