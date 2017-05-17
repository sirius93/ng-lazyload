import { Component } from '@angular/core';
import {Router} from '@angular/router';
// import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'main-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class landingPageComponent { 

constructor(private router:Router){

}

nav(){
  this.router.navigate(['/homepage']);
}
directtosso(){
      window.location.href = "http://localhost:5000/googlelogin";
    }

}
