import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2createroomComponent } from './game2createroom.component';

describe('Game2createroomComponent', () => {
  let component: Game2createroomComponent;
  let fixture: ComponentFixture<Game2createroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game2createroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2createroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
