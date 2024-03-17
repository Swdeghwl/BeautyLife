import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycastComponent } from './categorycast.component';

describe('CategorycastComponent', () => {
  let component: CategorycastComponent;
  let fixture: ComponentFixture<CategorycastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorycastComponent]
    });
    fixture = TestBed.createComponent(CategorycastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
