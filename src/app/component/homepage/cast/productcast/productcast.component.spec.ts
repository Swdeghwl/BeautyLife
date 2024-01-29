import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcastComponent } from './productcast.component';

describe('ProductcastComponent', () => {
  let component: ProductcastComponent;
  let fixture: ComponentFixture<ProductcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcastComponent]
    });
    fixture = TestBed.createComponent(ProductcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
