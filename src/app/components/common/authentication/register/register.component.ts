import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'sse-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sent = undefined;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  register(email, password, event) {
    this.authenticationService.register(email, password);
    this.sent = true;
  }

}
