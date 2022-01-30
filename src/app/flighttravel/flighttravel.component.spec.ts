import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighttravelComponent } from './flighttravel.component';

describe('FlighttravelComponent', () => {
  let component: FlighttravelComponent;
  let fixture: ComponentFixture<FlighttravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighttravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighttravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
