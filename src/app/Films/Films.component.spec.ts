import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Films } from './Films.component';

describe('Films', () => {
  let component: Films;
  let fixture: ComponentFixture<Films>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Films ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Films);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
