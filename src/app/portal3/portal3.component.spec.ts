import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portal3Component } from './portal3.component';

describe('Portal3Component', () => {
  let component: Portal3Component;
  let fixture: ComponentFixture<Portal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
