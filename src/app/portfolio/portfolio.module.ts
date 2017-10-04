import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { IntroComponent } from './intro/intro.component';
import { PortfolioMainComponent } from './portfolio-main/portfolio-main.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    IntroComponent,
    PortfolioMainComponent,
    PageTitleComponent,
  ],
  providers: [
  ],
  exports: [
    PortfolioMainComponent
  ]
})
export class PortfolioModule { }
