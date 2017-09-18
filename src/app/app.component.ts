import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'sse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.content.websiteTitle;
}
