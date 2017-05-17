import {Component, Injector} from '@angular/core';

@Component({
  selector: 'world-hello',
  template: `
    <div>World Hello {{showNum}}</div>
     <a href="http://placehold.it"><img src="http://placehold.it/350x150"></a>
  `,
})
export default class WorldHelloComponent {
  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
