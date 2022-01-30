import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fuelco2Component } from './fuelco2.component';

describe('Fuelco2Component', () => {
  let component: Fuelco2Component;
  let fixture: ComponentFixture<Fuelco2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fuelco2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fuelco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
