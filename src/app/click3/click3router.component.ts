import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { click3module } from './click3module.component';
import { Click3Component } from './click3.component';
import { LoginComponent } from './login/login.component';
const RoutCk3: Routes = [
  {
    path: 'click3',
    component: Click3Component,
    children: [
      {
        path: 'login3',
        component: LoginComponent,
        // loadChildren: './click3/click3module.component#click3module',
      },
      {
        path: '',
        redirectTo: 'click3',
        pathMatch:  'full',
      }
    ],
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(RoutCk3),
  ],
  exports: [
    RouterModule,
  ],
})
// tslint:disable-next-line:class-name
export class routerClick3 {}
