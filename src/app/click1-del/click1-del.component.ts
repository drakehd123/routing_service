import { Component, OnInit } from '@angular/core';
// route
import {ActivatedRoute} from '@angular/router';
import { click1module } from './../modules/click1mudule';
import { Click1Service } from './../click1.service';
@Component({
  selector: 'app-click1-del',
  templateUrl: './click1-del.component.html',
  styleUrls: ['./click1-del.component.scss']
})
export class Click1DelComponent implements OnInit {
  public clickDe: click1module = null;
  constructor(
    private route: ActivatedRoute,
    private clickSer: Click1Service,
  ) { }

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot.params.id);
    // them dau + de tranh xay ra null
    // tslint:disable-next-line:prefer-const
    let id = +this.route.snapshot.params.id;
    this.clickDe = this.clickSer.getProductById(id);
    console.log(this.clickDe);
  }

}
