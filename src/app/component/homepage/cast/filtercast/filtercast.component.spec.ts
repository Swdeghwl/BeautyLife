import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercastComponent } from './filtercast.component';

describe('FiltercastComponent', () => {
  let component: FiltercastComponent;
  let fixture: ComponentFixture<FiltercastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltercastComponent]
    });
    fixture = TestBed.createComponent(FiltercastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
