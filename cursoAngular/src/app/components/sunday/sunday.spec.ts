import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sunday } from './sunday';

describe('Sunday', () => {
  let component: Sunday;
  let fixture: ComponentFixture<Sunday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sunday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sunday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
