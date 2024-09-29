import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

interface CurrencyExchange {
  name: string;
  website: string;
  contact: string;
}

@Component({
  selector: 'app-currency-exchanges',
  templateUrl: './currency-exchanges.component.html',
  styleUrls: ['./currency-exchanges.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir CommonModule y FormsModule aquí
})
export class CurrencyExchangesComponent {
  exchanges: CurrencyExchange[] = [
    { name: 'Nombre de la empresa', website: 'Link de páginaweb', contact: 'correo de sitioweb' },
    { name: 'Nombre de la empresa', website: 'URL de empresa', contact: 'Correodeempresa' },
    { name: 'Casa de Cambio 3', website: 'https://casadecambio3.com', contact: 'info@casadecambio3.com' },
  ];

  newExchange: CurrencyExchange = { name: '', website: '', contact: '' };

  addExchange() {
    if (this.newExchange.name && this.newExchange.website && this.newExchange.contact) {
      this.exchanges.push({ ...this.newExchange });
      this.newExchange = { name: '', website: '', contact: '' }; // Reset the form
    }
  }
}
