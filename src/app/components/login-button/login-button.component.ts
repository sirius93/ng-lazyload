import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
directtosso(){
      window.location.href = "http://localhost:5000/googlelogin";
    }
}
