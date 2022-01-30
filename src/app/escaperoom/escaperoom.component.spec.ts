import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaperoomComponent } from './escaperoom.component';

describe('EscaperoomComponent', () => {
  let component: EscaperoomComponent;
  let fixture: ComponentFixture<EscaperoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscaperoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaperoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
