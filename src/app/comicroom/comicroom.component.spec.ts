import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicroomComponent } from './comicroom.component';

describe('ComicroomComponent', () => {
  let component: ComicroomComponent;
  let fixture: ComponentFixture<ComicroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
