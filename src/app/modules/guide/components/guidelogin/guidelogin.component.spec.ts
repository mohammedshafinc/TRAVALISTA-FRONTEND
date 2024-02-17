import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideloginComponent } from './guidelogin.component';

describe('GuideloginComponent', () => {
  let component: GuideloginComponent;
  let fixture: ComponentFixture<GuideloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideloginComponent]
    });
    fixture = TestBed.createComponent(GuideloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
