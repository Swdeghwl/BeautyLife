import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcastComponent } from './searchcast.component';

describe('SearchcastComponent', () => {
  let component: SearchcastComponent;
  let fixture: ComponentFixture<SearchcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchcastComponent]
    });
    fixture = TestBed.createComponent(SearchcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
