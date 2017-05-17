// import * as http from 'http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class apiService {
    api:Object;
    user:Object;
    accesstoken:string;
    // ='ya29.GmE1BD6UySRr14mtNO8-lfQJthutwxCYVJwigQH5vNqP75BgYsbbJcHLj7WFCdV6UwXh02bz79KoAVWVNgsDP2VWt5D6h98cEn23lR1RVFLYXYAAVz0pKYkBAgAsSNXiv0ZN'
    constructor(private http:Http){
        console.log('service initialized ')
        // this.api=2; 
    }
    ngOnInit(){
      
    }
    getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
  }
    getUserData(){
        this.accesstoken= this.getCookie("user_token");
    return this.http.get(`https://www.googleapis.com/plus/v1/people/me?access_token=${this.accesstoken}`).map(res=>res.json())        
    }
    getAllApis(){
        //https://api.myjson.com/bins/7l3qj
return this.http.get('https://api.myjson.com/bins/cpn97').map(res=>res.json())
    }

    getApiList(){
        return this.http.get('https://api.myjson.com/bins/cpn97').map(res=>res.json())
    }
    setApiDetails(api:Object){
        this.api=api;
        // console.log(this.api);
    }

    getApiDetails(){
        // console.log(this.api);
        return this.api;
    }
    getUserDetails():Promise<any>{
        console.log(this.user)
        return Promise.resolve(this.user);        
    }
}