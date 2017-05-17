import {Component, Injector} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    Hello World {{showNum}}
    <a href="http://placehold.it"><img src="http://placehold.it/350x150"></a>
  `,
  
})
export default class HelloWorldComponent {
  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
