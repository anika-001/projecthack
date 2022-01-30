import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartravelComponent } from './cartravel.component';

describe('CartravelComponent', () => {
  let component: CartravelComponent;
  let fixture: ComponentFixture<CartravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
