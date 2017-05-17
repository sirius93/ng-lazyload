import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AmpDashModule } from 'amp-dash';
import {RouterModule} from '@angular/router';
import { landingPageComponent } from './components/landing page/landing-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ComponentsModule } from './components/components.module';
import { GetUserDataService } from './services/user-data/user-data.service';
import HelloWorldComponent from './components/dyanamic-content/hello-world-component';
import WorldHelloComponent from './components/dyanamic-content/world-hello-component';
import DynamicComponent from './components/dyanamic-content/dyanamic-content.component';
@NgModule({
  
  imports: [
    ComponentsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AmpDashModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'landingpage',
        component: landingPageComponent
      },
      {
        path: '',
        redirectTo: '/landingpage',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [GetUserDataService],
  declarations: [ AppComponent, HelloWorldComponent, WorldHelloComponent, DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
