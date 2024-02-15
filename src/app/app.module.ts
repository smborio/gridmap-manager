import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopLeftComponent } from './components/top-components/top-left/top-left.component';
import { TopRightComponent } from './components/top-components/top-right/top-right.component';
import { BottomRightComponent } from './components/bottom-components/bottom-right/bottom-right.component';

@NgModule({
  declarations: [
    AppComponent,
    TopLeftComponent,
    TopRightComponent,
    BottomRightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
