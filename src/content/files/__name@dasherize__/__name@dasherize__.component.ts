import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Page} from '../../page';
import {NovaTemplate} from '../../../_decorators/template.decorator';
import {NovaAPIService} from '../../../_services/nova-api.service';
import {UIEventHandlerService} from '../../../_services/uievent-handler.service';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: [ './<%= dasherize(name) %>.component.css' ],
    encapsulation: ViewEncapsulation.None
})
@NovaTemplate('Floor<%= classify(name) %>Component')
export class Floor<%= classify(name) %>Component extends Floor {

  constructor(public nova: NovaAPIService, public uiEventHandler: UIEventHandlerService, route: ActivatedRoute,	router: Router, public sanitizer: DomSanitizer, public meta: Meta, public title: Title) {
    super(nova, uiEventHandler, route, router, meta, title);
  }

}