import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; 
import { MainContentComponent } from './components/main-content/main-content.component';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component'; 
import { CurrencyExchangesComponent } from './components/currency-exchanges/currency-exchanges.component';
import { FooterComponent } from './components/footer/footer.component'; // Importar FooterComponent

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>  
    <app-main-content></app-main-content>  
    <app-exchange-form></app-exchange-form> 
    <app-currency-exchanges></app-currency-exchanges>
    <app-footer></app-footer> <!-- Asegúrate de incluir el footer aquí -->
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    MainContentComponent,
    ExchangeFormComponent,
    CurrencyExchangesComponent,
    FooterComponent // Asegúrate de incluir el FooterComponent
  ]
})
export class AppComponent {}
