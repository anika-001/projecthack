import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcarbobComponent } from './personalcarbob.component';

describe('PersonalcarbobComponent', () => {
  let component: PersonalcarbobComponent;
  let fixture: ComponentFixture<PersonalcarbobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcarbobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcarbobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
