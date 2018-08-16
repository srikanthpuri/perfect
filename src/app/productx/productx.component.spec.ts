import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductxComponent } from './productx.component';

describe('ProductxComponent', () => {
  let component: ProductxComponent;
  let fixture: ComponentFixture<ProductxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
