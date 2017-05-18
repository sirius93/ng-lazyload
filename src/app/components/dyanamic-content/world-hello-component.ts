import {Component, Injector} from '@angular/core';

@Component({
  selector: 'world-hello',
  template: `
    <section id="main1" >
				<div class="inner">
					<header class="major special">
						<h1>Generic 2</h1>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>
					<a href="#" class="image fit"><img src="http://www.clker.com/cliparts/d/e/a/3/1369961971492032569fantasy_banner-1.jpg" alt="" /></a>
					<p>Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan.</p>
					<a href="#" class="image fit"><img src="https://www.bergerpaints.com/colour-magazine/Upload/Posting/Image/colours-nature-banner-jan.jpg" alt="" /></a>
				</div>
			</section>
  `,
  styles:[`#main1{width:1440px;height:500px;}`]
})
export default class WorldHelloComponent {
  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
