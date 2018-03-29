import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-click3',
  templateUrl: './click3.component.html',
  styleUrls: ['./click3.component.scss']
})
export class Click3Component implements OnInit {

  constructor( public routerServ: Router) { }

  ngOnInit() {
  }
  navigate(url: string) {
    console.log(url);
    setTimeout(
      () => {
        this.routerServ.navigateByUrl(url);
    }, 3000);
  }

}
