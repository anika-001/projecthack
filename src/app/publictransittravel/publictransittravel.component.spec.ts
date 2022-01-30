import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublictransittravelComponent } from './publictransittravel.component';

describe('PublictransittravelComponent', () => {
  let component: PublictransittravelComponent;
  let fixture: ComponentFixture<PublictransittravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublictransittravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublictransittravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
