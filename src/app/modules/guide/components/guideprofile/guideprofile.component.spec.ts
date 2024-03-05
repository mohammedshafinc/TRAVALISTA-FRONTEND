import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideprofileComponent } from './guideprofile.component';

describe('GuideprofileComponent', () => {
  let component: GuideprofileComponent;
  let fixture: ComponentFixture<GuideprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideprofileComponent]
    });
    fixture = TestBed.createComponent(GuideprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
