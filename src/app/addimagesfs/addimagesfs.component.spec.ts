import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimagesfsComponent } from './addimagesfs.component';

describe('AddimagesfsComponent', () => {
  let component: AddimagesfsComponent;
  let fixture: ComponentFixture<AddimagesfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddimagesfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimagesfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
