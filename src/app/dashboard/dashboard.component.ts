import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = "TESTE VIASOFT";
  subtitle: string = "NFE - Visão Geral de Disponibilidade dos Serviços";

  constructor() { }

  ngOnInit(): void {
  }

}
