import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TeiaComponentComponent } from './projeto/teia-component/teia-component.component';
import { AgrupamentoComponenteComponent } from './projeto/agrupamento-componente/agrupamento-componente.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TeiaComponentComponent,
    AgrupamentoComponenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: 'agrupamento', component: AgrupamentoComponenteComponent  },
      { path: 'lista', component: TeiaComponentComponent  },
      { path: '', redirectTo: '/agrupamento', pathMatch: 'full' },
      { path: '**', redirectTo: '/lista' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

