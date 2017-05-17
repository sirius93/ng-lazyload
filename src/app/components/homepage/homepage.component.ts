import {FormControl,ReactiveFormsModule} from '@angular/forms';
import {apiDetailsComponent} from '../api-details-modal/api-details-modal.component'
import {apiService} from '../../services/api-services/api.service'
import {MdDialog, MdDialogRef} from '@angular/material';
import 'rxjs/add/operator/startWith';
import { GetUserDataService } from '../../services/user-data/user-data.service';
import { _document } from '@angular/platform-browser/src/browser';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
// import 'rxjs/add/operator/subscribe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [apiService],
  
})
export class HomepageComponent {
  apis:api[];
  userName:string;
  userEmail:string;
  userImage:string;
  allapis:any;
  stateCtrl: FormControl;
  filteredApis: any;
  displayFlag:boolean;
 selectedOption:any;
  apiList = [
    "Mapping",
    "Social",
    "Video",
    "Photos",
    "eCommerce",
    "Telephony",
    "Music",
    "Search",
    "Messaging",
    "Bookmarks",
    "Tools",
    "Widgets",
    "Enterprise",
    "Storage",
    "Reference",
    "Advertising",
    "Content",
    "Cloud",
    "Recommendations",
    "Analytics",
    "Events",
    "Jobs",
    "Translation",
    "Calendars",
    "Travel"
];

  constructor(public dialog: MdDialog,private apiDetails:apiService,private getUserDataService: GetUserDataService  ) {
    this.stateCtrl = new FormControl();
    this.filteredApis = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterApis(name));
    this.apiDetails.getUserData().subscribe(user =>{
      this.userEmail=user.emails[0];
      this.userName=user.name.givenName+" "+user.name.familyName;
      this.userImage=user.image.url;
      console.log(this.userImage);
    })
    this.apiDetails.getApiList().subscribe(apis => this.apis=apis);
     this.apiDetails.getAllApis().subscribe(apis => {this.allapis=apis;
  });

  }

 userDetails={}
    // this.data=this.getUserDataService.getUserDetails()
    // console.log(this.data);
    ngOnInit(){
      this.getUserDataService.getUserDetails().subscribe(data=>this.userDetails=data)
      console.log(this.userDetails+"ho")
    }

  openDialog(api) {
    let dialogRef = this.dialog.open(apiDetailsComponent);
    this.apiDetails.setApiDetails(api);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  filterApis(val: string) {
    return val ? this.apiList.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.apiList;
  }

  renderResults(api){
    console.log(api);
    var allApiTr= <HTMLElement[]><any>document.querySelectorAll(".all-api-tr");
  console.log(allApiTr[0].childNodes[5].textContent);
  for(let i in allApiTr){
    if(allApiTr[i].childNodes[5].textContent == api){
      this.displayFlag=true;
      // console.log(allApiTr[i]);
      allApiTr[i].style.display="block";
      allApiTr[i].style.minWidth="134px";
      //  allApiTr[i].style.minHeight="37px";
    }
    else{
        allApiTr[i].style.display="none";
    }
  }
 
  }
 
}
interface api{
  id:number,
  API:string,
  Description:string,
  tags:string[]
}

