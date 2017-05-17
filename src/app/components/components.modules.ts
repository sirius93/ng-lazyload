// import { StarRatingComponent } from './api-details-modal/star-rating/star-rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { landingPageComponent } from './landing page/landing-page.component';
import { rateComponent } from './rate-component/rate.component'
import { HomepageComponent } from './homepage/homepage.component';
import {apiDetailsComponent} from './api-details-modal/api-details-modal.component';
import {StarRatingComponent} from './star-rating/star-rating.component'
import {apiService} from '../services/api-services/api.service'
import {RouterModule} from '@angular/router';
import { AmpDashModule } from 'amp-dash';

@NgModule({
  declarations: [
      landingPageComponent,
      HomepageComponent,
      apiDetailsComponent,
      StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AmpDashModule
    
  ],


  exports:[landingPageComponent,HomepageComponent,apiDetailsComponent,StarRatingComponent],
  entryComponents: [apiDetailsComponent],
  providers: [apiService],
  bootstrap: []
})
export class ComponentsModule { }
