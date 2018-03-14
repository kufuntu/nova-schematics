import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Page} from '../../page';
import {NovaTemplate} from '../../../_decorators/template.decorator';
import {NovaAPIService} from '../../../_services/nova-api.service';
import {UIEventHandlerService} from '../../../_services/uievent-handler.service';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";

@Component({
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: [ './<%= dasherize(name) %>.component.css' ],
    encapsulation: ViewEncapsulation.None
})
@NovaTemplate('Page<%= classify(name) %>Component')
export class Page<%= classify(name) %>Component extends Page {

  constructor(public nova: NovaAPIService, public uiEventHandler: UIEventHandlerService, public sanitizer: DomSanitizer, public meta: Meta, public title: Title) {
    super(nova, uiEventHandler, meta, title);
  }

}