import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behave1Component } from './behave1.component';

describe('Behave1Component', () => {
  let component: Behave1Component;
  let fixture: ComponentFixture<Behave1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behave1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behave1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
