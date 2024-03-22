import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TeiaComponentComponent } from './projeto/teia-component/teia-component.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TeiaComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

