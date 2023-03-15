import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Characters } from './Characters.component';

describe('Characters', () => {
  let component: Characters;
  let fixture: ComponentFixture<Characters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Characters ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Characters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
