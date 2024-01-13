import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstheaderComponent } from './firstheader.component';

describe('FirstheaderComponent', () => {
  let component: FirstheaderComponent;
  let fixture: ComponentFixture<FirstheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstheaderComponent]
    });
    fixture = TestBed.createComponent(FirstheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
