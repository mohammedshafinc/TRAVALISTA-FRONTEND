import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationDialogComponentComponent } from './otp-verification-dialog-component.component';

describe('OtpVerificationDialogComponentComponent', () => {
  let component: OtpVerificationDialogComponentComponent;
  let fixture: ComponentFixture<OtpVerificationDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVerificationDialogComponentComponent]
    });
    fixture = TestBed.createComponent(OtpVerificationDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
