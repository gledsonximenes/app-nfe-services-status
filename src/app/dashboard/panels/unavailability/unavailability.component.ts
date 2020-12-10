import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../../../services/dashboard.service';

@Component({
  selector: 'app-unavailability',
  templateUrl: './unavailability.component.html',
  styleUrls: ['./unavailability.component.scss']
})
export class UnavailabilityComponent implements OnInit {

  stateUnavailability: any; 
  refreshIcon;

  constructor(private services:DashboardService) { }

  ngOnInit(): void {
    this.getServiceUnavailabilityByState();
  }

  getServiceUnavailabilityByState(){
    this.refreshIcon = "pi pi-spin pi-refresh";
    this.services.getServiceUnavailabilityByState().subscribe(rs => {
      this.stateUnavailability = rs;
      this.refreshIcon = "pi pi-refresh";
    }, err => {
      this.refreshIcon = "pi pi-refresh";
      console.log('Erro ao verificar estado com maior instabilidade!');
      console.log(err);
    });
  }

}
