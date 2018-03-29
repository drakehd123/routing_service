import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { Click1Component } from './click1/click1.component';
// import { Click2Component } from './click2/click2.component';
// import { Click3Component } from './click3/click3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Click1DelComponent } from './click1-del/click1-del.component';

const RoutAp: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: AppComponent
  },
  {
    path: 'click1',
    component: Click1Component,
  },
  {
    path: 'click1/:id',
    component: Click1DelComponent,
  },
  // {
  //   path: 'click2',
  //   component: Click2Component,
  // },
  // {
  //   path: 'click3',
  //   loadChildren: './click3/click3module.component#click3module',
  // },
  {
    path: '**',
    component: NotfoundComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(RoutAp),
  ],
  exports: [RouterModule],
})
// tslint:disable-next-line:class-name
export class approuting {}
