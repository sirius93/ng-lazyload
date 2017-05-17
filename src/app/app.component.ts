import {Component,HostListener,NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import HelloWorldComponent from './components/dyanamic-content/hello-world-component';
import WorldHelloComponent from './components/dyanamic-content/world-hello-component';
import DynamicComponent from './components/dyanamic-content/dyanamic-content.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  componentData1 = null;
  componentData2 = null;
  i = 0;
  @HostListener("window:scroll", [])
  onWindowScroll(){
   
        this.componentData1 = {
        component: HelloWorldComponent,
        inputs: {
        showNum: 9
        }
    };
     
        this.componentData2 = {
        component: WorldHelloComponent,
        inputs: {
        showNum: 2
        }
    };
      }
    }
    
  
