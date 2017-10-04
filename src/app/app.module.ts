import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from './common/common.module';
import { RootComponent } from './root/root.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
