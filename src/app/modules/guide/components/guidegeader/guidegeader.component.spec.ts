import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidegeaderComponent } from './guidegeader.component';

describe('GuidegeaderComponent', () => {
  let component: GuidegeaderComponent;
  let fixture: ComponentFixture<GuidegeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidegeaderComponent]
    });
    fixture = TestBed.createComponent(GuidegeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
