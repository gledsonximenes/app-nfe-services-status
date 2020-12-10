import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private restService: RestService) { }

  getCurrentStatusServicesNfe() {
    return this.restService.Get('status/services');
  }

  getCurrentStatusServicesNfeByState(state: string) {
    return this.restService.Get('status/services/' + state);
  }

  getCurrentStatusServicesNfeByDate(date: string) {
    return this.restService.GetParam('status/services/', "date=" + date);
  }

  getServiceUnavailabilityByState() {
    return this.restService.Get('states/services/unavailability');
  }

}
