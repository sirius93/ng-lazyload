    import { Component } from '@angular/core';
    import {apiService} from '../../services/api-services/api.service'
// import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'api-details',
  templateUrl: './api-details-modal.component.html',
  styleUrls: ['./api-details-modal.component.scss'],
  providers: [apiService]
})
export class apiDetailsComponent { 
    // apiService:any; 
    api:Object;
    constructor(public apiDetails:apiService)
    {
    }
    ngOnInit()
    {
       this.api= this.apiDetails.getApiDetails();
        console.log(this.api);
    }
}