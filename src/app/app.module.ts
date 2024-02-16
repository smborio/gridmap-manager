import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopLeftComponent } from './components/top-components/top-left/top-left.component';
import { TopRightComponent } from './components/top-components/top-right/top-right.component';
import { BottomRightComponent } from './components/bottom-components/bottom-right/bottom-right.component';
import { TopMiddleComponent } from './components/top-components/top-middle/top-middle.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopLeftComponent,
    TopRightComponent,
    BottomRightComponent,
    TopMiddleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
