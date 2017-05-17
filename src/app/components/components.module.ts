import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ApiformComponent } from './apiform/apiform.component';
import { allAppRoutings } from '../routes/index.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { landingPageComponent } from './landing page/landing-page.component';
import { GetUserDataService } from '../services/user-data/user-data.service';
import {apiDetailsComponent} from './api-details-modal/api-details-modal.component';
import {apiService} from '../services/api-services/api.service';
import {RouterModule} from '@angular/router';
import { AmpDashModule } from 'amp-dash';

@NgModule({
  imports: [
    CommonModule,
    allAppRoutings,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AmpDashModule,
  ],
  declarations: [LoginButtonComponent, ApiformComponent, HomepageComponent,landingPageComponent,apiDetailsComponent],
  exports:[
    LoginButtonComponent,
    ApiformComponent,
    HomepageComponent,
    landingPageComponent,
    apiDetailsComponent
  ],
  providers:[GetUserDataService],
   entryComponents: [apiDetailsComponent],
   bootstrap: []
})
export class ComponentsModule { }
