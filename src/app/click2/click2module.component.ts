import {NgModule} from '@angular/core';
import { click2router } from './click2router.component';
import { Click2Component } from './click2.component';
@NgModule({
  imports: [
    click2router,
  ],
  exports: [
    Click2Component,
  ],
  declarations: [
    Click2Component,
  ],
})
// tslint:disable-next-line:class-name
export class click2module {}
