import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperfootComponent } from './paperfoot.component';

describe('PaperfootComponent', () => {
  let component: PaperfootComponent;
  let fixture: ComponentFixture<PaperfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperfootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
