import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unavailability'
})
export class UnavailabilityPipe implements PipeTransform {

  transform(value: string): string {

    switch (value) {
      case 'AM':
        value = "Amazonas";
        break;
      case 'BA':
        value = "Bahia";
        break;
      case 'CE':
        value = "Ceará";
        break;
      case 'GO':
        value = "Goiás";
        break;
      case 'MG':
        value = "Minas Gerais";
        break;
      case 'MS':
        value = "Mato Grosso do Sul";
        break;
      case 'MT':
        value = "Mato Grosso";
        break;
      case 'PE':
        value = "Pernambuco";
        break;
      case 'PR':
        value = "Paraná";
        break;
      case 'RS':
        value = "Rio Grande do Sul";
        break;
      case 'SP':
        value = "São Paulo";
        break;
      case 'SVAN':
        value = "Sefaz Virtual do Ambiente Nacional";
        break;
      case 'SVRS':
        value = "Sefaz Virtual do RS";
        break;
      case 'SVC_AN':
        value = "Sefaz Virtual de Contingência Ambiente Nacional";
        break;
      case 'SVC_RS':
        value = "Sefaz Virtual de Contingência Rio Grande do Sul";
        break;
      default:
        value = "Não houve instabilidade até o momento!";
    }

    return value;
  }

}
