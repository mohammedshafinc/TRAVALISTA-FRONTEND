import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideotpComponent } from './guideotp.component';

describe('GuideotpComponent', () => {
  let component: GuideotpComponent;
  let fixture: ComponentFixture<GuideotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideotpComponent]
    });
    fixture = TestBed.createComponent(GuideotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
