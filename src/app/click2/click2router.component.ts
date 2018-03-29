import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Click2Component } from './click2.component';
const RoutC2: Routes = [
  {
    path: 'click2',
    component: Click2Component ,
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(RoutC2),
  ],
  exports: [RouterModule],
})
// tslint:disable-next-line:class-name
export class click2router {}
