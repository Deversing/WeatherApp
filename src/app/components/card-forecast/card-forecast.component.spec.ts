import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForecastComponent } from './card-forecast.component';

describe('CardForecastComponent', () => {
  let component: CardForecastComponent;
  let fixture: ComponentFixture<CardForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardForecastComponent]
    });
    fixture = TestBed.createComponent(CardForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
