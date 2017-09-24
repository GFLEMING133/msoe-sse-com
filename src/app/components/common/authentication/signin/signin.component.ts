import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'sse-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  signIn(email, password, event) {
    this.authenticationService.signIn(email, password);
  }

}
