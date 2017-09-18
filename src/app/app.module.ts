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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    IndexComponent
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
  providers: [ FirebaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
