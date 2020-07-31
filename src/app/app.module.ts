import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KaligraphiModule } from '@kalidea/kaligraphi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ecran1Component } from './ecran1/ecran1.component';
import { Ecran2Component } from './ecran2/ecran2.component';
import { Ecran3Component } from './ecran3/ecran3.component';
import { Page1Component } from './page1/page1.component';
import { StakerComponent } from './staker/staker.component';

@NgModule({
  declarations: [
    AppComponent,
    Ecran1Component,
    Ecran2Component,
    Ecran3Component,
    Page1Component,
    StakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KaligraphiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
