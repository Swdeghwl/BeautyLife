import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcastComponent } from './accountcast.component';

describe('AccountcastComponent', () => {
  let component: AccountcastComponent;
  let fixture: ComponentFixture<AccountcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountcastComponent]
    });
    fixture = TestBed.createComponent(AccountcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
