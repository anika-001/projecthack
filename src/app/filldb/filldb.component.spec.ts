import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilldbComponent } from './filldb.component';

describe('FilldbComponent', () => {
  let component: FilldbComponent;
  let fixture: ComponentFixture<FilldbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilldbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilldbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
