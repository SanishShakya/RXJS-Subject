import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behave3Component } from './behave3.component';

describe('Behave3Component', () => {
  let component: Behave3Component;
  let fixture: ComponentFixture<Behave3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behave3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behave3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
