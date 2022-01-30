import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaferoomComponent } from './saferoom.component';

describe('SaferoomComponent', () => {
  let component: SaferoomComponent;
  let fixture: ComponentFixture<SaferoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaferoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaferoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
