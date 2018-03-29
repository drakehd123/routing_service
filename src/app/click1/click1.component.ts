import { Component, OnInit } from '@angular/core';
import { click1module } from './../modules/click1mudule';
import { Click1Service } from './../click1.service';
@Component({
  selector: 'app-click1',
  templateUrl: './click1.component.html',
  styleUrls: ['./click1.component.scss']
})
export class Click1Component implements OnInit {
  click1: click1module[] = [];
  constructor(
    public clickServi: Click1Service,
  ) { }

  ngOnInit() {
    this.click1 = this.clickServi.getAllProduct();
  }

}
