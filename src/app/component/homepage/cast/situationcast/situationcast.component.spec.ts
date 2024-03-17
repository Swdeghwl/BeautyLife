import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationcastComponent } from './situationcast.component';

describe('SituationcastComponent', () => {
  let component: SituationcastComponent;
  let fixture: ComponentFixture<SituationcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituationcastComponent]
    });
    fixture = TestBed.createComponent(SituationcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
