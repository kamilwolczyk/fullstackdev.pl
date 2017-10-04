import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    AngularFontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
  ]
})
export class CommonModule { }
