import { CalendarComponent } from './components/common/widgets/calendar/calendar.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';

export const routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', component: IndexComponent } // TODO: Make "404" page
];
