import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../../../services/dashboard.service';

import * as moment from 'moment';


@Component({
  selector: 'app-services-status',
  templateUrl: './services-status.component.html',
  styleUrls: ['./services-status.component.scss']
})
export class ServicesStatusComponent implements OnInit {

  data: any[]; 
  totalData; 
  refreshIcon;
  states: any[]; 
  date: Date;
  state;

  constructor(private services:DashboardService) { }

  ngOnInit(): void {
    this.states = [
      {name: 'Amazonas', code: 'AM'},
      {name: 'Bahia', code: 'BA'},
      {name: 'Ceará', code: 'CE'},
      {name: 'Goiás', code: 'GO'},
      {name: 'Minas Gerais', code: 'MG'},
      {name: 'Mato Grosso do Sul', code: 'MS'},
      {name: 'Mato Grosso', code: 'MT'},
      {name: 'Pernambuco', code: 'PE'},
      {name: 'Paraná', code: 'PR'},
      {name: 'Rio Grande do Sul', code: 'RS'},
      {name: 'São Paulo', code: 'SP'},
      {name: 'Sefaz Virtual do Ambiente Nacional', code: 'SVAN'},
      {name: 'Sefaz Virtual do RS', code: 'SVRS'},
      {name: 'Sefaz Virtual de Contingência Ambiente Nacional', code: 'SVC_AN'},
      {name: 'Sefaz Virtual de Contingência Rio Grande do Sul', code: 'SVC_RS'}
  ];
    this.loadTableCurrentStatusServicesNfe();
  }

  loadTableCurrentStatusServicesNfe() {
    this.refreshIcon = "pi pi-spin pi-refresh";
    this.services.getCurrentStatusServicesNfe().subscribe(rs => {
      this.totalData = rs.length;
      this.data = rs;
      this.refreshIcon = "pi pi-refresh";
    }, err => {
      this.refreshIcon = "pi pi-refresh";
      console.log('Erro ao carregar aula!' + err);
    });
  }  

  getCurrentStatusServicesNfeByState(state) {
    if(state.value === null){
      this.loadTableCurrentStatusServicesNfe();
      return;
    }
    this.date = null;
    this.data = [];
    this.services.getCurrentStatusServicesNfeByState(state.value.code).subscribe(rs => {
      this.totalData = rs.length;
      this.data.push(rs);
    }, err => {
      console.log('Erro ao carregar aula!' + err);
    });
  }  

  getCurrentStatusServicesNfeByDate(event) {
    let date = moment(event).format('DD-MM-YYYY');
    this.date = event;
    this.data = [];
    this.state = null;
    this.services.getCurrentStatusServicesNfeByDate(date).subscribe(rs => {
      this.totalData = rs.length;
      this.data = rs;
    }, err => {
      console.log('Erro ao carregar aula!' + err);
    });
  }  

}
