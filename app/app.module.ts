//SystemJS loader helps find files.

// NgModule is always required; helps define application module below
import { NgModule }      from '@angular/core';
// required for web-based apps to deal with various browsers
import { BrowserModule } from '@angular/platform-browser';

//import of root component
import { AppComponent }  from './app.component';

//decorator: modifying the behavior of what follows
@NgModule({
  imports:      [BrowserModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
