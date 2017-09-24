import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/layout/header/header.component';
import { FooterComponent } from './components/common/layout/footer/footer.component';
import { FirebaseService } from './services/firebase/firebase.service';
import { environment } from '../environments/environment';
import { CalendarComponent } from './components/common/widgets/calendar/calendar.component';
import { IndexComponent } from './components/pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { DxSchedulerModule } from 'devextreme-angular';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationGuard } from './services/authentication/authentication.guard';
import { SigninComponent } from './components/common/authentication/signin/signin.component';
import { RegisterComponent } from './components/common/authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    IndexComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxSchedulerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ FirebaseService, AuthenticationService, AuthenticationGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
