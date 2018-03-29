import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Click3Component } from './click3.component';

describe('Click3Component', () => {
  let component: Click3Component;
  let fixture: ComponentFixture<Click3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Click3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Click3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
