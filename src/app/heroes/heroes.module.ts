import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import { BrowserModule } from '@angular/platform-browser';


import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule
  ]
})
export class HeroesModule {

}
