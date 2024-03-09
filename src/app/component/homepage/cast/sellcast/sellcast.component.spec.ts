import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcastComponent } from './sellcast.component';

describe('SellcastComponent', () => {
  let component: SellcastComponent;
  let fixture: ComponentFixture<SellcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellcastComponent]
    });
    fixture = TestBed.createComponent(SellcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
