import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopLeftComponent } from './components/top-components/top-left/top-left.component';

@NgModule({
  declarations: [
    AppComponent,
    TopLeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
