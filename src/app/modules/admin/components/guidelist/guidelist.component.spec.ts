import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelistComponent } from './guidelist.component';

describe('GuidelistComponent', () => {
  let component: GuidelistComponent;
  let fixture: ComponentFixture<GuidelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidelistComponent]
    });
    fixture = TestBed.createComponent(GuidelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
