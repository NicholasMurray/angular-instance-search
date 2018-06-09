import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { WikipediaSearchService } from './wikipedia-search.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule
  ],
  providers: [WikipediaSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
