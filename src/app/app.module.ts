import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

/*** MODULES ***/
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*** MODULES PRIMENG ***/
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';


/*** COMPONENTS ***/
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RestService } from './../app/services/rest.service';
import { UnavailabilityComponent } from './dashboard/panels/unavailability/unavailability.component';
import { ServicesStatusComponent } from './dashboard/panels/services-status/services-status.component';
import { FormatDateTimePipe } from './pipes/format-date-time.pipe';
import { UnavailabilityPipe } from './pipes/unavailability.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UnavailabilityComponent,
    ServicesStatusComponent,
    FormatDateTimePipe,
    UnavailabilityPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    PanelModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, RestService, FormatDateTimePipe, UnavailabilityPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
