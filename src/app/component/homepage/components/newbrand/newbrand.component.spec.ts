import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbrandComponent } from './newbrand.component';

describe('NewbrandComponent', () => {
  let component: NewbrandComponent;
  let fixture: ComponentFixture<NewbrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbrandComponent]
    });
    fixture = TestBed.createComponent(NewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
