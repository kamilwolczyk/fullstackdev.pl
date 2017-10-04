import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './_site/root/root.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
