import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangesComponent } from './currency-exchanges.component';

describe('CurrencyExchangesComponent', () => {
  let component: CurrencyExchangesComponent;
  let fixture: ComponentFixture<CurrencyExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyExchangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
