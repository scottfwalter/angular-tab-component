import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, TabComponent, TabsComponent, TabComponent1, TabComponent2 } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TabComponent, TabsComponent, HelloComponent, TabComponent1, TabComponent2 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
