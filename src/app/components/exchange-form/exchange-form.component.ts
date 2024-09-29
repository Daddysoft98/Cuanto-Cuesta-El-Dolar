import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] // Asegúrate de incluir CommonModule aquí
})
export class ExchangeFormComponent {
  exchangeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.exchangeForm = this.fb.group({
      companyName: ['', Validators.required],
      dollarBuy: ['', Validators.required],
      dollarSell: ['', Validators.required],
      euroBuy: ['', Validators.required],
      euroSell: ['', Validators.required],
      poundBuy: ['', Validators.required],
      poundSell: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.exchangeForm.valid) {
      console.log('Formulario válido:', this.exchangeForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
