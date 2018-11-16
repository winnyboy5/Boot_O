import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Globals } from './globals';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    Globals
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
