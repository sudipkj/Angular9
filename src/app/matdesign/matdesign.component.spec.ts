import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdesignComponent } from './matdesign.component';

describe('MatdesignComponent', () => {
  let component: MatdesignComponent;
  let fixture: ComponentFixture<MatdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
