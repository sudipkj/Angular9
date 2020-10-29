import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portal1Component } from './portal1.component';

describe('Portal1Component', () => {
  let component: Portal1Component;
  let fixture: ComponentFixture<Portal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
