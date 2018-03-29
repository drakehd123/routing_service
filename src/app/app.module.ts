import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { approuting } from './approuting.component';
import { Click1Component } from './click1/click1.component';
import { Click2Component } from './click2/click2.component';
// import { Click3Component } from './click3/click3.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { LoginComponent } from './click3/login/login.component';
import { click3module } from './click3/click3module.component';
import { click2module } from './click2/click2module.component';
// service
import { Click1Service } from './click1.service';
import { Click1DelComponent } from './click1-del/click1-del.component';

@NgModule({
  declarations: [
    AppComponent,
    Click1Component,
    // Click2Component,
    // Click3Component,
    NotfoundComponent,
    Click1DelComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    click3module,
    click2module,
    approuting,
  ],
  exports: [],
  providers: [Click1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
