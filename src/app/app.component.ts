import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; 
import { MainContentComponent } from './components/main-content/main-content.component'; 
import { CurrencyExchangesComponent } from './components/currency-exchanges/currency-exchanges.component';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { CommonModule } from '@angular/common'; // Necesario para NgFor, NgIf, etc.

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>  
    <app-main-content></app-main-content>   
    <app-currency-exchanges></app-currency-exchanges>
    <app-exchange-form></app-exchange-form>
    <app-footer></app-footer> 
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    MainContentComponent,
    CurrencyExchangesComponent,
    ExchangeFormComponent,
    FooterComponent,
    CommonModule 
  ]
})
export class AppComponent {}
