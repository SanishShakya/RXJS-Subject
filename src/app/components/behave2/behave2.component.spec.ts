import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behave2Component } from './behave2.component';

describe('Behave2Component', () => {
  let component: Behave2Component;
  let fixture: ComponentFixture<Behave2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behave2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behave2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
