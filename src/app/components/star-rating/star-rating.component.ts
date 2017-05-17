// import { $QUESTION } from '@angular/compiler/src/chars';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { RateSession} from '../../services/rate-session/rate-session.service';

@Component({
  selector: 'pd-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent{
  @Input() init;
  @Output() entered= new EventEmitter();
      i:number;
      value:number;
      selected:boolean;
      color:string='#FFDF00';
  constructor() {
    
    
   }
   ngOnInit(){
     this.color='#FFDF00';
    this.selected=false;
     console.log(this.init);
     this.i= this.init;
     this.value=this.i;
   }

clickfun(i:number,event){
    if(event.type=="click"){
      if(this.i==this.value){
        this.i=0;
        this.value=this.i;
      }else{
        this.i=i;
        this.value=this.i;
      }
      this.init=this.value;

      this.entered.emit(this.value);

    }
    else if(event.type=="mouseover"){
      this.value=i;
    }
    else{
      this.value=this.i;
    }
}
changeClass(index:number){
   return index <= this.value ? 'filled' : 'unfilled';
}
}