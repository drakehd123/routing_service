import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Click1DelComponent } from './click1-del.component';

describe('Click1DelComponent', () => {
  let component: Click1DelComponent;
  let fixture: ComponentFixture<Click1DelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Click1DelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Click1DelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
