import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers} from '@angular/http';
import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetUserDataService {
//  private url = 'https://www.googleapis.com/plus/v1/people/me?access_token=ya29.GmA1BH4ClD3oot0gKa86YI_vVM_VGSKfQHk97k9ASID-C-nybXmnB-5yHZFMWjrk_W1BpACjdO8gtXTVTHxpiJ3dophgC-RqAMsU9wDv9key39acPSZ9OSH_TZKaFJdzKuQ';
  private url = 'https://api.myjson.com/bins/69gg9';
  constructor(private http:Http) {
    console.log('service in');
  }
  
  getUserDetails(){
      return this.http.get(`https://api.myjson.com/bins/69gg9`).map((res:Response)=>res.json())                
  }
}
