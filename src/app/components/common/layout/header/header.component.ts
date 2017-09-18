import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HeaderSettings } from './header.settings';
import { HeaderLinkSet } from '../../../../models/common/layout/header/header-links.model';

@Component({
  selector: 'sse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string;
  headerLinks: HeaderLinkSet[];

  constructor() {
    this.title = environment.content.websiteTitle;
    this.headerLinks = HeaderSettings.headerLinks;
  }

}
