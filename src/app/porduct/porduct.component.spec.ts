import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductComponent } from './porduct.component';

describe('PorductComponent', () => {
  let component: PorductComponent;
  let fixture: ComponentFixture<PorductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
