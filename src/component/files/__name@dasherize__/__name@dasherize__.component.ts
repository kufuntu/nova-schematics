import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NovaAPIService } from '../../_services/nova-api.service';
import { UIEventHandlerService } from '../../_services/uievent-handler.service';
import { Subscription } from 'rxjs/Subscription';
import { MagazineService } from 'app/_services/magazine.service';

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: [ './<%= dasherize(name) %>.component.css' ],
})
@NovaTemplate('<%= classify(name) %>Component')
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

  public font;
	private sub: Subscription;
	private subFont: Subscription;

	constructor(
		public nova: NovaAPIService,
		public mag: MagazineService,
		public uiEventHandler: UIEventHandlerService
	) {}

	ngOnInit() {
		this.sub = this.mag.getMagazine().subscribe(data => {
			this.subFont = this.nova.getFont(data.navigation.font).subscribe(fontData => {
				this.font = "'" + fontData.name + "'";
			});
		});
  }

	ngOnDestroy() {
		if (this.sub) this.sub.unsubscribe();
		if (this.subFont) this.subFont.unsubscribe();
	}
}


}