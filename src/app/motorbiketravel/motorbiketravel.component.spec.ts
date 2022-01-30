import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbiketravelComponent } from './motorbiketravel.component';

describe('MotorbiketravelComponent', () => {
  let component: MotorbiketravelComponent;
  let fixture: ComponentFixture<MotorbiketravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorbiketravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorbiketravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
