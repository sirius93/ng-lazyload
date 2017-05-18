import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';

import { GetUserDataService } from './services/user-data/user-data.service';
import HelloWorldComponent from './components/dyanamic-content/hello-world-component';
import WorldHelloComponent from './components/dyanamic-content/world-hello-component';
import DynamicComponent from './components/dyanamic-content/dyanamic-content.component';
import FooterComponent from './components/dyanamic-content/footer';
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,

  ],
  providers: [GetUserDataService],
  declarations: [ AppComponent,FooterComponent, HelloWorldComponent, WorldHelloComponent, DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
